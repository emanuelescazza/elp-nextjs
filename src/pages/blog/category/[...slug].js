import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import Page from '../../../components/blog/page';
import { fetchApi, limit } from '../../../lib/fetchApis';

export default function CategoryPage({ posts, categories, currentCategory, currentPage, totalPages }) {
  const router = useRouter();
  const pagination = {
    current: currentPage,
    numPages: totalPages
  };
  const handleRoute = (page) => { router.push(`/blog/category/${currentCategory.slug}/${page}`) }
  return (
    <Layout pageTitle={`elp! - ${currentCategory.name}`} description={`Post nella categoria ${currentCategory.name}`}>
      <Page articles={posts} categories={categories} currentCategory={currentCategory} pagination={pagination} handleRoute={handleRoute} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = await fetchApi('categories');
  const paths = [];
  await Promise.all(
    categories.map(async category => {
      const articlesCount = await fetchApi('articles/count', { category_name: category.slug });
      const numPages = Math.ceil(parseInt(articlesCount) / limit);
      for (let i = 0; i < numPages; i++) {
        paths.push(`/blog/category/${category.slug}/${i + 1}`);
      }
    })
  );
  // add latest (main blog page)
  const countAll = await fetchApi('articles/count');
  const totalPages = Math.ceil(parseInt(countAll) / limit);
  for (let i = 0; i < totalPages; i++) {
    paths.push(`/blog/category/latest/${i + 1}`);
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const categories = await fetchApi('categories');
  let currentCategory = categories.find(el => el.slug === params.slug[0]);
  const query = {}
  if (currentCategory) {
    query['category_name'] = currentCategory.slug;
  } else {
    currentCategory = {
      name: 'latest',
      slug: 'latest'
    }
  }
  const totalArticles = parseInt(await fetchApi('articles/count', query));
  const totalPages = Math.ceil(totalArticles / limit);
  query['_limit'] = limit;
  let currentPage = parseInt(params.slug[1]);
  if (currentPage > 1) {
    query['_start'] = (currentPage - 1) * limit;
  }
  console.log(query);
  const posts = await fetchApi('articles', query);

  return { props: { posts, categories, currentCategory, currentPage, totalPages } }
}

import Layout from '../../components/layout';
import Post from '../../components/blog/post';
import { fetchApi } from '../../lib/fetchApis';

export default function BlogPost({ post }) {
  return (
    <Layout pageTitle={`elp! - ${post.title}`} description={post.description}
      article={{ category: post.category.name, author: post.author.name, published: post.publishedAt, modified: post.updatedAt, tags: post.tags }}>
      <Post post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await fetchApi('articles/slugs');
  const paths = posts.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetchApi(`articles/${params.slug}`)
  return { props: { post } }
}

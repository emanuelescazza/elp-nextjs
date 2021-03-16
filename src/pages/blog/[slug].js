import Layout from '../../components/layout';
import Post from '../../components/blog/post';
import fetchApi from '../../lib/fetchApis';

export default function BlogPost({ post }) {
  return (
    <Layout pageTitle={`elp! - ${post.title}`} description={post.description}>
      <Post post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // const res = await fetch('http://localhost:1337/articles/slugs');
  // const posts = await res.json();
  const posts = await fetchApi('articles/slugs');

  const paths = posts.map((slug) => `/blog/${slug}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`http://localhost:1337/articles/${params.slug}`);
  // const post = await res.json();
  const post = await fetchApi(`articles/${params.slug}`)

  return { props: { post } }
}

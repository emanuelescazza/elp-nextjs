import Post from '../../components/blog/post';

export default function BlogPost({ post }) {
  console.log(post);
  return (
    <Post post={post} />
  );
}

const posts = [
  {
    slug: '1',
    content: 'content1'
  },
  {
    slug: '2',
    content: 'content2'
  },
]
export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/articles/slugs');
  const posts = await res.json();

  const paths = posts.map((slug) => `/blog/${slug}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/articles/${params.slug}`);
  const post = await res.json();

  return { props: { post } }
}

import styles from '../../styles/blog/Sidebar.module.css';

export default function Sidebar({ categories }) {
  return (
    <div id={styles.sidebar}>
      <p id={styles.categories}>Categorie</p>
      <ul>
        {categories.map(category => {
          return (
            <li key={category._id}>
              <a href={`/blog?category=${category.slug}`}>{category.name}</a>
            </li>)
        })}
        <li>
          <a href="/blog">Tutte le categorie</a>
        </li>
      </ul>
    </div>
  );
}
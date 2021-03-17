import Link from 'next/link';
import styles from '../../styles/blog/Sidebar.module.css';

export default function Sidebar({ categories, currentCategory }) {
  console.log(currentCategory);
  return (
    <div id={styles.sidebar}>
      <p id={styles.categories}>Categorie</p>
      <ul>
        {categories.map(category => {
          return (
            <li key={category._id}>
              <Link href={`/blog/category/${category.slug}/1`}>
                <a className={currentCategory.slug === category.slug ? styles.active : ''}>{category.name}</a>
              </Link>
            </li>)
        })}
        <li>
          <Link href={`/blog/category/latest/1`}>
            <a className={currentCategory.slug === 'latest' ? styles.active : ''}>Tutte le categorie</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
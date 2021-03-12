import styles from '../../styles/sidebar/Sidebar.module.css';

export default function Sidebar({ categories }) {
  return (
    <div id={styles.sidebar}>
      <ul>
        {categories.map(category => {
          return (
            <li key={category._id}>
              <a href="#">{category.name}</a>
            </li>)
        })}
      </ul>
    </div>
  );
}
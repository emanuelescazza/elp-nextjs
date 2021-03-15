import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/blog/Article.module.css';

const breakpoint = 768;

export default function Article({ title, category, date, imgSrc, slug }) {
  const [isHovered, setHover] = useState(false);
  const cardStyle = [styles.article];
  if (isHovered)
    cardStyle.push(styles.hovered);
  return (
    <div className={cardStyle.join(' ')}>
      { imgSrc && <img
        className={styles.img}
        src={imgSrc}
        alt={'img'}
      />}
      <div className={styles.contentBox}>
        <h2 className={[styles.title, styles.truncate].join(' ')}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h2>
        {/* <p className={styles.content}>{description}</p> */}
        <div className={styles.info}>
          <span>
            {new Intl.DateTimeFormat("it-IT", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(new Date(date))}
            &nbsp; &nbsp; &#8226; &nbsp;&nbsp;
          </span>
          <span className={styles.topic}><Link href={`/blog?category=${category.slug}`}>{category.name}</Link></span>
          <span className={(imgSrc) ? styles.down : styles.right}>Non ci sono commenti</span>
        </div>
      </div>
    </div>
  );
}
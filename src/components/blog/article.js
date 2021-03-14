import { useState } from 'react';
import { useViewport } from '../../hooks/viewport';
import styles from '../../styles/blog/Article.module.css';

const breakpoint = 768;

export default function Article({ title, topic, date, imgSrc }) {
  const [isHovered, setHover] = useState(false);
  const { width } = useViewport();
  const isMobile = width < breakpoint;
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
          onMouseLeave={() => setHover(false)}>{title}
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
          <span>{topic}</span>
          <span className={(isMobile && imgSrc) ? styles.down : styles.right}>Non ci sono commenti</span>
        </div>
      </div>
    </div>
  );
}
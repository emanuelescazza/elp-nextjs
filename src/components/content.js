import Image from 'next/image';
import styles from '../styles/Content.module.css';

export default function Content({ title, body, img, isSplitted = false }) {
  const path = img?.path;
  const imgStyle = img?.isCircle ? `${styles.image} ${styles.circle}` : styles.image;
  const contentStyle = !isSplitted ? `${styles.content} ${styles.noSplit}` : styles.content;
  return (
    <div className={styles.contentBox}>
      <div className={contentStyle}>
        <div className={styles.title}>
          <div id={styles.titleBox}>
            <p>{title.up}</p>
            <h1>
              {title.down}
            </h1>
          </div>
          <div className={imgStyle} id={styles.imgBox}>
            {img &&
              <Image
                className={imgStyle}
                src={`/${path}`}
                alt={`${path}`}
                width={500}
                height={500}
                layout={'responsive'}
              />}
          </div>
        </div>
        <div className={styles.body}>
          <p>
            {body}
          </p>
        </div>
      </div>
    </div>

  );
}
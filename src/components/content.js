import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import styles from '../styles/Content.module.css';

export default function Content({ title, body, img, isSplitted = false }) {
  const contentStyle = !isSplitted ? `${styles.content} ${styles.noSplit}` : styles.content;
  const [srcLarge, srcMedium, srcSmall, srcThumbnail] =
    [
      img?.formats?.large?.url,
      img?.formats?.medium?.url,
      img?.formats?.small?.url,
      img?.formats?.thumbnail?.url,
    ]
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
          <div id={styles.imgBox}>
            {img &&
              <img
                src={img?.url}
                className={styles.circle}
                alt={''}
                loading={'lazy'}
                srcSet={`${img?.url} 1170w, ${srcLarge} 1024w, ${srcSmall} 300w, ${srcMedium} 768w`}
                sizes={'(max-width: 1020px) 100vw, 1020px'}
              ></img>}
          </div>
        </div>
        <div className={styles.body}>
          <ReactMarkdown className={styles.md} source={addNewLines(body)} />
        </div>
      </div>
    </div>

  );
}

const addNewLines = (str) => {
  try {
    return str.split('\n').map(l => l.trim()).join('\n');
  } catch {
    return str;
  }
}
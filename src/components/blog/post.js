import Link from 'next/link';
import Content from '../content';
import styles from '../../styles/blog/Post.module.css';

export default function Post({ post }) {
  const [srcLarge, srcMedium, srcSmall, srcThumbnail] =
    [
      post.image?.formats?.large?.url,
      post.image?.formats?.medium?.url,
      post.image?.formats?.small?.url,
      post.image?.formats?.thumbnail?.url,
    ]
  return (
    <div id={styles.post}>
      {post.image && <img
        src={post.image?.url}
        className={styles.img}
        alt={''}
        loading={'lazy'}
        srcSet={`${srcLarge} 1024w,
                  ${post.image?.url} 1170w,
                  ${srcSmall} 300w,
                  ${srcMedium} 768w`}
        sizes="(max-width: 1020px) 100vw, 1020px"
      ></img>
      }
      <div className={styles.contentBox}>

        <div>
          <Content
            title={post.title}
            body={post.content}
          />
        </div>
        <div className={styles.info}>
          <span>Pubblicato da
          <Link href={`/bio`}>
              <a>
                <strong>{` ${post.author.name} `}</strong>
              </a>
            </Link>
          </span>
          <span>&nbsp;il giorno&nbsp;<strong>{new Intl.DateTimeFormat("it-IT", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(new Date(post.publishedAt))}</strong>&nbsp;</span>
          <span className={styles.mobileDown}>nella categoria
          <Link href={`/blog/category/${post.category.slug}/1`}>
              <a>
                <strong>{` ${post.category.name} `}</strong>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
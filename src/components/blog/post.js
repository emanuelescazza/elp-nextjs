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
        src={srcLarge}
        className={styles.img}
        alt={''}
        loading={'lazy'}
        srcSet={`${srcLarge} 1024w,
                  ${srcLarge} 1170w,
                  ${srcThumbnail} 300w,
                  ${srcSmall} 768w`}
        sizes="(max-width: 1020px) 100vw, 1020px"></img>}
      <div className={styles.contentBox}>

        <div>
          <Content
            title={{ up: post.title, down: post.description }}
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
          }).format(new Date(post.publishedAt))}</strong></span>
          <span>&nbsp;nella categoria
          <Link href={`/blog?category=${post.category.slug}`}>
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
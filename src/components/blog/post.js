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
        alt=""
        loading="lazy"
        srcset={`${srcLarge} 1024w,
                  ${srcLarge} 1170w,
                  ${srcThumbnail} 300w,
                  ${srcSmall} 768w`}
        sizes="(max-width: 1020px) 100vw, 1020px"></img>}
      <div className={styles.contentBox}>
        <Content
          title={{ up: post.title, down: post.description }}
          body={post.content}
        />
      </div>
    </div>
  );
}
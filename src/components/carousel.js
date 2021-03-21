import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from '../styles/Carousel.module.css';
import { useViewport } from '../hooks/viewport';

export default function Carousel({ articles }) {
  const prev = <FontAwesomeIcon icon={faAngleLeft} className={styles.prev} />;
  const next = <FontAwesomeIcon icon={faAngleRight} className={styles.next} />;
  const handleDragStart = (e) => e.preventDefault();
  const { width } = useViewport();
  const items = articles.map(article => {
    let imgUrl = article.image?.url;
    if (width < 768) {
      imgUrl = article.image?.formats?.medium?.url;
    } else if (width < 1024) {
      article.image?.formats?.large?.url;
    }
    return (
      <div key={article._id} onDragStart={handleDragStart} className={styles.banner} style={{ background: `url(${imgUrl}) no-repeat center center/cover` }}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div style={{ margin: '0 auto' }}>
      <AliceCarousel
        renderPrevButton={d => prev}
        renderNextButton={d => next}
        items={items}
        autoPlay
        autoPlayInterval="4000"
        infinite
      />
    </div>
  );
}
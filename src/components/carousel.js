import styles from '../styles/Carousel.module.css';

export default function Carousel() {
  return (
    <section className={styles.carousel} aria-label="Gallery">
      <ol className={styles.carouselViewport}>
        <li id="carousel__slide1"
          tabindex="0"
          className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}>
            <a href="#carousel__slide4"
              className={styles.carouselPrev}>Articolo precedente</a>
            <a href="#carousel__slide2"
              className={styles.carouselNext}>Articolo successivo</a>
          </div>
        </li>
        <li id="carousel__slide2"
          tabindex="0"
          className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide1"
            className={styles.carouselPrev}>Articolo precedente</a>
          <a href="#carousel__slide3"
            className={styles.carouselNext}>Articolo successivo</a>
        </li>
        <li id="carousel__slide3"
          tabindex="0"
          className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide2"
            className={styles.carouselPrev}>Articolo precedente</a>
          <a href="#carousel__slide4"
            className={styles.carouselNext}>Articolo successivo</a>
        </li>
        <li id="carousel__slide4"
          tabindex="0"
          className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide3"
            className={styles.carouselPrev}>Articolo precedente</a>
          <a href="#carousel__slide1"
            className={styles.carouselNext}>Articolo successivo</a>
        </li>
      </ol>
      <aside className={styles.carouselNavigation}>
        <ol className={styles.carouselNavigationList}>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide1"
              className={styles.carouselNavigationButton}>Articolo 1</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide2"
              className={styles.carouselNavigationButton}>Articolo2 2</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide3"
              className={styles.carouselNavigationButton}>Articolo 3</a>
          </li>
          <li className={styles.carouselNavigationItem}>
            <a href="#carousel__slide4"
              className={styles.carouselNavigationButton}>Articolo 4</a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
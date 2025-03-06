import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Card from '../Card/Card';
import { CardData } from '../../types';
import styles from './CardCarousel.module.css';
import { useTranslation } from 'react-i18next'; // 导入 useTranslation hook

interface CardCarouselProps {
  cards: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const { i18n } = useTranslation(); // 使用 i18n 实例

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 监听语言变化，重新计算卡片布局
  useEffect(() => {
    // 当语言变化时，重新渲染轮播
    const handleLanguageChange = () => {
      // 强制重新渲染轮播
      setTimeout(() => {
        setSlidesPerView(prev => prev);
      }, 100);
    };
    
    // 添加语言变化的监听器
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      // 清理监听器
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, slidesPerView]);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className={styles.swiper}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className={styles.swiperSlide}>
            <Card data={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
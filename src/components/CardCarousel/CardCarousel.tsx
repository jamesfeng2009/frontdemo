import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Card from '../Card/Card';
import { CardData } from '../../types';
import styles from './CardCarousel.module.css';
import { useTranslation } from 'react-i18next';

interface CardCarouselProps {
  cards: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const { i18n } = useTranslation();

  // 根据屏幕宽度调整显示的卡片数量
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
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

  return (
    <div className={`${styles.carouselContainer} ${isMobile ? styles.mobileContainer : ''}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={isMobile ? 10 : 20}
        slidesPerView={slidesPerView}
        pagination={{ 
          clickable: true,
          dynamicBullets: false,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="slide"
        className={styles.swiper}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        observer={true}
        observeParents={true}
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
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
        setSlidesPerView(1.2); // 在小屏幕上显示部分下一张卡片
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2.2); // 在中等屏幕上显示部分下一张卡片
      } else {
        setSlidesPerView(3); // 在大屏幕上显示完整的三张卡片
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
        spaceBetween={20} // 增加间距
        slidesPerView={slidesPerView}
        centeredSlides={true} // 启用居中显示
        pagination={{ 
          clickable: true,
          dynamicBullets: true // 动态分页器
        }}
        loop={true}
        autoplay={{
          delay: 4000, // 增加自动播放时间
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50, // 减小深度效果
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
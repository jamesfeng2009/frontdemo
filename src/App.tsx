import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import CardCarousel from './components/CardCarousel/CardCarousel';
import { CardData } from './types';
import './App.css';
import { useTranslation } from 'react-i18next';

// 定义t函数的类型
type TranslateFunction = (key: string, options?: any) => string;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // 使用类型断言
  const translate = t as TranslateFunction;
  
  // 确保 i18n 已经初始化
  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, [i18n]);
  
  // 使用翻译后的文本，更新为与图片完全一致的数据
  const cardData: CardData[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // 日本街道图片
      amount: '¥20,126',
      currency: 'JPY',
      merchant: 'Drinks at Yokocho',
      location: 'Japan',
      cashback: '¥1,550'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // 新加坡图片
      amount: '$6,252',
      currency: 'SGD',
      merchant: 'TopFirst cashback',
      location: 'Last month',
      cashback: '$2,500'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // 纽约图片
      amount: '$2,500',
      currency: 'USD',
      merchant: 'New York Pass',
      location: 'USA',
      cashback: '$25'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // 巴黎图片
      amount: '€1,500',
      currency: 'EUR',
      merchant: 'Paris Shopping',
      location: 'France',
      cashback: '€75'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // 伦敦图片
      amount: '£1,850',
      currency: 'GBP',
      merchant: 'London Experience',
      location: 'UK',
      cashback: '£95'
    }
  ];

  return (
    <div className="app">
      <Header />
      
      {/* 添加标题和描述文本 */}
      <div className="hero-section">
        <h1 className="main-title">MAKE YOUR SPEND, WELL-SPENT</h1>
        <p className="subtitle">
          Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals? Reach them faster. However you spend — Revolut is all you need.
        </p>
        <button className="get-started-btn">Get started</button>
      </div>
      
      <div className="carousel-section">
        <CardCarousel cards={cardData} />
      </div>
    </div>
  );
};

export default App;

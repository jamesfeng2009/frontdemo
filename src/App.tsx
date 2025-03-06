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
  
  // 使用翻译后的文本
  const cardData: CardData[] = [
    {
      id: 1,
      image: '/images/card1.jpg',
      amount: '¥20,126',
      currency: 'JPY',
      merchant: translate('drinksAt'),
      location: translate('japan'),
      cashback: '¥1,022'
    },
    {
      id: 2,
      image: '/images/card2.jpg',
      amount: 'S$6,252',
      currency: 'SGD',
      merchant: translate('topFirst'),
      location: translate('lastMonth'),
      cashback: '+S$2,500'
    },
    {
      id: 3,
      image: '/images/card3.jpg',
      amount: '$2,500',
      currency: 'USD',
      merchant: translate('newYorkPass'),
      location: translate('usa'),
      cashback: '$25'
    },
    {
      id: 4,
      image: '/images/card1.jpg',
      amount: '€1,500',
      currency: 'EUR',
      merchant: translate('parisShopping'),
      location: translate('france'),
      cashback: '€75'
    }
  ];

  return (
    <div className="app">
      <Header />
      <CardCarousel cards={cardData} />
    </div>
  );
};

export default App;

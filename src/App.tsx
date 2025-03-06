import React from 'react';
import Header from './components/Header/Header';
import CardCarousel from './components/CardCarousel/CardCarousel';
import { CardData } from './types';
import './App.css';

const App: React.FC = () => {
  // 示例卡片数据
  const cardData: CardData[] = [
    {
      id: 1,
      image: '/images/card1.jpg',
      amount: '¥20,126',
      currency: 'JPY',
      merchant: 'Drinks at Utsunomiya',
      location: 'Japan',
      cashback: '¥1,022'
    },
    {
      id: 2,
      image: '/images/card2.jpg',
      amount: 'S$6,252',
      currency: 'SGD',
      merchant: 'TopFirst cashback',
      location: 'Last month',
      cashback: '+S$2,500'
    },
    {
      id: 3,
      image: '/images/card3.jpg',
      amount: '$2,500',
      currency: 'USD',
      merchant: 'New York Pass',
      location: 'USA',
      cashback: '$25'
    },
    {
      id: 4,
      image: '/images/card1.jpg',
      amount: '€1,500',
      currency: 'EUR',
      merchant: 'Paris Shopping',
      location: 'France',
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

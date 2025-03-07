import React, { useState } from 'react';
import { CardData } from '../../types';
import styles from './Card.module.css';

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [imageError, setImageError] = useState(false);

  // 处理图片加载错误
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        {!imageError ? (
          <img 
            src={data.image} 
            alt={data.merchant} 
            className={styles.cardImage} 
            onError={handleImageError}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>{data.merchant.charAt(0)}</span>
          </div>
        )}
        
        {/* 中央金额显示 */}
        <div className={styles.amountContainer}>
          <span className={styles.amount}>{data.amount}</span>
          
          {/* 国家/货币标签 */}
          <div className={styles.currencyTag}>
            <span className={styles.dot}></span>
            <span className={styles.locationText}>{data.location}</span>
            <span className={styles.separator}>·</span>
            <span className={styles.currencyText}>{data.currency}</span>
            <span className={styles.dropdownIcon}>▼</span>
          </div>
        </div>
      </div>
      
      {/* 底部信息区域 */}
      <div className={styles.cardFooter}>
        <div className={styles.merchantInfo}>
          <div className={styles.merchantIcon}>
            <span>🍴</span>
          </div>
          <div className={styles.merchantDetails}>
            <div className={styles.merchantName}>{data.merchant}</div>
            <div className={styles.merchantTime}>11:30</div>
          </div>
        </div>
        <div className={styles.cashback}>- {data.cashback}</div>
      </div>
    </div>
  );
};

export default Card;
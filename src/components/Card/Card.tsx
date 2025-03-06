import React from 'react';
import { CardData } from '../../types';
import styles from './Card.module.css';

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={data.image} alt={data.merchant} className={styles.cardImage} />
        <div className={styles.amountOverlay}>
          <span className={styles.amount}>{data.amount}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.merchantInfo}>
          <div className={styles.merchantIcon}>
            {data.merchant.charAt(0)}
          </div>
          <div className={styles.merchantDetails}>
            <div className={styles.merchantName}>{data.merchant}</div>
            {data.location && <div className={styles.merchantLocation}>{data.location}</div>}
          </div>
        </div>
        {data.cashback && <div className={styles.cashback}>+{data.cashback}</div>}
      </div>
    </div>
  );
};

export default Card;
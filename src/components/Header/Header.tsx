import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        MAKE YOUR SPEND, WELL-SPENT
      </h1>
      <p className={styles.subtitle}>
        Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals? Reach them faster. However you spend — Revolut is all you need.
      </p>
      <button className={styles.button}>Get started</button>
    </div>
  );
};

export default Header;
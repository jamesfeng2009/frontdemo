import React from 'react';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

// 定义t函数的类型
type TranslateFunction = (key: string, options?: any) => string;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // 使用类型断言
  const translate = t as TranslateFunction;
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles.header}>
      <div className={styles.langSwitch}>
        <button onClick={toggleLanguage} className={styles.langButton}>
          {i18n.language === 'en' ? '中文' : 'English'}
        </button>
      </div>
      <h1 className={styles.title}>{translate('title')}</h1>
      <p className={styles.subtitle}>{translate('subtitle')}</p>
      <button className={styles.button}>{translate('getStarted')}</button>
    </div>
  );
};

export default Header;
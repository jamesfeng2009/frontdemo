import React from 'react';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

// 定义t函数的类型
type TranslateFunction = (key: string, options?: any) => string;

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  
  // 移除语言切换按钮相关代码
  // 如果有类似下面的代码，可以删除或注释掉
  // const toggleLanguage = () => {
  //   const newLang = i18n.language === 'en' ? 'zh' : 'en';
  //   i18n.changeLanguage(newLang);
  // };
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Logo 内容 */}
      </div>
      
      {/* 移除语言切换按钮 */}
      {/* <button onClick={toggleLanguage} className={styles.langButton}>
        {i18n.language === 'en' ? '中文' : 'English'}
      </button> */}
      
      {/* 其他 header 内容 */}
    </header>
  );
};

export default Header;
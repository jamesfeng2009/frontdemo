import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 确保导入全局样式
import App from './App';
import './i18n'; // 导入国际化配置

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

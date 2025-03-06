import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'MAKE YOUR SPEND, WELL-SPENT',
          subtitle: 'Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big life goals? Reach them faster. However you spend — Revolut is all you need.',
          getStarted: 'Get started',
          drinksAt: 'Drinks at Utsunomiya',
          japan: 'Japan',
          topFirst: 'TopFirst cashback',
          lastMonth: 'Last month',
          newYorkPass: 'New York Pass',
          usa: 'USA',
          parisShopping: 'Paris Shopping',
          france: 'France'
        }
      },
      zh: {
        translation: {
          title: '让您的消费更有价值',
          subtitle: '更新衣橱？获得现金返还。在日本？用日元消费。人生大目标？更快实现。无论您如何消费 — Revolut 满足您所有需求。',
          getStarted: '立即开始',
          drinksAt: '宇都宫饮品消费',
          japan: '日本',
          topFirst: '头等现金返还',
          lastMonth: '上个月',
          newYorkPass: '纽约通行证',
          usa: '美国',
          parisShopping: '巴黎购物',
          france: '法国'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
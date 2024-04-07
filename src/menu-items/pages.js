// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: '',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Главная',
      type: 'item',
      url: '/',
    },
    {
      id: 'promotions',
      title: 'Акции',
      type: 'item',
      url: '#promotions',
    },
    {
      id: 'menu',
      title: 'Меню',
      type: 'item',
      url: '#menu',
    },
    {
      id: 'delivery',
      title: 'Доставка',
      type: 'item',
      url: '#delivery',
    },
    {
      id: 'contacts',
      title: 'Контакты',
      type: 'item',
      url: '#contacts',
    },
    {
      id: 'loyalty',
      title: 'Программа лояльности',
      type: 'item',
      url: '#loyalty',
    },
  ],
};

export default pages;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [
    {
      title: 'ЗАВТРАКИ',
      id: 'breakfast',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'ЗАКУСКИ',
      id: 'dishes',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'САЛАТЫ',
      id: 'salads',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'ГОРЯЧИЕ БЛЮДА',
      id: 'hot-dishes',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'ХОЛОДНЫЕ ЗАКУСКИ',
      id: 'cold-dishes',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'ГОРЯЧИЕ ЗАКУСКИ',
      id: 'hot-dishes1',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
    {
      title: 'ДЕСЕРТЫ',
      id: 'deserts',
      children: [
        {
          title: 'МADE IN GEORGIA',
          id: 'made-in-georgia',
          price: '550',
          mass: '120',
        },
        {
          title: 'МАЦОНИ С ИНЖИРОМ',
          id: 'mac-and-cheese',
          price: '550',
          mass: '120',
        },
        {
          title: 'МЕДОВИК',
          id: 'medovik',
          price: '550',
          mass: '120',
        },
        {
          title: 'НАПОЛЕОН',
          id: 'napoleon',
          price: '550',
          mass: '120',
        },
        {
          title: 'ОЛИВКА',
          id: 'olivka',
          price: '550',
          mass: '120',
        },
      ],
    },
  ],
};

const menu = createSlice({
  name: 'menu',
  initialState,
});

export default menu.reducer;

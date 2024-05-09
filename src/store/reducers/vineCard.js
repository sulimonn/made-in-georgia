import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vineCard: [
    {
      title: 'БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ',
      id: 'non-alcoholic-cocktails',
      children: [
        {
          title: 'Мохито Классический',
          id: 'classic-mojito',
          price: '460',
          mass: '300 мл',
        },
        {
          title: 'Мохито Клубничный',
          id: 'strawberry-mojito',
          price: '670',
          mass: '300 мл',
        },
      ],
    },
    {
      title: 'МОЛОЧНЫЕ КОКТЕЙЛИ',
      id: 'milkshakes',
      children: [
        {
          title: 'Kayoแหนนมหั',
          id: 'kayo-milkshake',
          price: '450',
          mass: '330 мл',
        },
        {
          title: 'Шоколадный',
          id: 'chocolate-milkshake',
          price: '450',
          mass: '330 мл',
        },
        {
          title: 'Ванильный',
          id: 'vanilla-milkshake',
          price: '450',
          mass: '330 мл',
        },
      ],
    },
    {
      title: 'СВЕЖЕВЫЖАТЫЕ СОКИ',
      id: 'fresh-pressed-juices',
      children: [
        {
          title: 'Яблочный',
          id: 'apple-juice',
          price: '430',
          mass: '200 мл',
        },
        {
          title: 'Морковный',
          id: 'carrot-juice',
          price: '430',
          mass: '200 мл',
        },
        {
          title: 'Грейпфрутовый',
          id: 'grapefruit-juice',
          price: '430',
          mass: '200 мл',
        },
        {
          title: 'Апельсиновый',
          id: 'orange-juice',
          price: '430',
          mass: '200 мл',
        },
      ],
    },
    {
      title: 'ДОМАШНИЕ ЛИМОНАДЫ',
      id: 'homemade-lemonades',
      children: [
        {
          title: 'Манго-маракуйя',
          id: 'mango-passionfruit',
          price: '1 л/1550',
          mass: '330 мл/550',
        },
        {
          title: 'Малина-маракуйя',
          id: 'raspberry-passionfruit',
          price: '1 л/1350',
          mass: '330 мл/530',
        },
        {
          title: 'Абрикос-черная смородина',
          id: 'apricot-blackcurrant',
          price: '1 л/1200',
          mass: '330 мл/490',
        },
        {
          title: 'Цитрусовый',
          id: 'citrus',
          price: '1 л/1200',
          mass: '330 мл/490',
        },
        {
          title: 'Тархун-яблоко',
          id: 'tarragon-apple',
          price: '1 л/1200',
          mass: '350 мл/490',
        },
      ],
    },
    {
      title: 'НАПИТКИ',
      id: 'drinks',
      children: [
        {
          title: 'Байкал без газа',
          id: 'baikal-no-gas',
          price: '460',
          mass: '500 мл',
        },
        {
          title: 'Байкал с газом',
          id: 'baikal-with-gas',
          price: '460',
          mass: '500 мл',
        },
        {
          title: 'San benedetto без газа',
          id: 'san-benedetto-no-gas',
          price: '250',
          mass: '250 мл',
        },
        {
          title: 'San benedetto es rasa',
          id: 'san-benedetto-es-rasa',
          price: '530',
          mass: '750 мл',
        },
        {
          title: 'San benedetto с газом',
          id: 'san-benedetto-with-gas',
          price: '350',
          mass: '250 мл',
        },
        {
          title: 'San benedetto с газом',
          id: 'san-benedetto-with-gas-2',
          price: '630',
          mass: '750 мл',
        },
        {
          title: 'Coca-Cola',
          id: 'coca-cola',
          price: '300',
          mass: '350 мл',
        },
        {
          title: 'Fanta',
          id: 'fanta',
          price: '290',
          mass: '330 мл',
        },
        {
          title: 'Sprite',
          id: 'sprite',
          price: '290',
          mass: '330 мл',
        },
        {
          title: 'Red Bull',
          id: 'red-bull',
          price: '350',
          mass: '250 мл',
        },
        {
          title: 'Schweppes',
          id: 'schweppes',
          price: '280',
          mass: '250 мл',
        },
        {
          title: 'Море клюквенный',
          id: 'cranberry-sea',
          price: '150',
          mass: '200 мл',
        },
        {
          title: 'Компот из сухофруктов',
          id: 'dried-fruit-compote',
          price: '450',
          mass: '1000 мл',
        },
        {
          title: 'Сок в ассортименте',
          id: 'assorted-juice',
          price: '450',
          mass: '1000 мл',
        },
        {
          title: "Сок 'Swell'",
          id: 'swell-juice',
          price: '300',
          mass: '250 мл',
        },
        {
          title: 'Грузинский лимонад в ассортименте',
          id: 'georgian-lemonade',
          price: '320',
          mass: '450 мл',
        },
      ],
    },
    {
      title: 'КОФЕ',
      id: 'coffee',
      children: [
        {
          title: 'Эспрессо',
          id: 'espresso',
          price: '250',
          mass: '30 мл',
        },
        {
          title: 'Двойной эспрессо',
          id: 'double-espresso',
          price: '310',
          mass: '60 мл',
        },
        {
          title: 'Американо',
          id: 'americano',
          price: '290',
          mass: '120 мл',
        },
        {
          title: 'Капучино',
          id: 'cappuccino',
          price: '390',
          mass: '200 мл',
        },
        {
          title: 'Латте',
          id: 'latte',
          price: '390',
          mass: '250 мл',
        },
        {
          title: 'Раф',
          id: 'raf',
          price: '420',
          mass: '250 мл',
        },
        {
          title: 'Флэт Уайт',
          id: 'flat-white',
          price: '490',
          mass: '300 мл',
        },
        {
          title: 'Глясе',
          id: 'glace',
          price: '460',
          mass: '300 мл',
        },
      ],
    },
    {
      title: 'АЛЬТЕРНАТИВНОЕ МОЛОКО',
      id: 'alternative-milk',
      children: [
        {
          title: 'Кокосовое',
          id: 'coconut-milk',
          price: '100',
          mass: '',
        },
        {
          title: 'Миндальное',
          id: 'almond-milk',
          price: '100',
          mass: '',
        },
      ],
    },
    {
      title: 'ФРУКТОВЫЕ ЧАИ',
      id: 'fruit-teas',
      children: [
        {
          title: 'Имбирный',
          id: 'ginger-tea',
          price: '690',
          mass: '800 мл',
        },
        {
          title: 'Марокканский',
          id: 'moroccan-tea',
          price: '690',
          mass: '800 мл',
        },
        {
          title: 'Облепиха с грушей',
          id: 'sea-buckthorn-pear',
          price: '750',
          mass: '500 мл',
        },
        {
          title: 'Клубника с лаймом и мятой',
          id: 'strawberry-lime-mint',
          price: '750',
          mass: '800 мл',
        },
      ],
    },
    {
      title: 'ЧАЙ',
      id: 'tea',
      children: [
        {
          title: 'Ассам',
          id: 'assam-tea',
          price: '550',
          mass: '400 мл',
        },
        {
          title: 'Эрл Грей',
          id: 'earl-grey-tea',
          price: '550',
          mass: '400 мл',
        },
        {
          title: 'Пуэр 7 лет',
          id: 'puerh-tea',
          price: '770',
          mass: '400 мл',
        },
        {
          title: 'Сенча',
          id: 'sencha-tea',
          price: '520',
          mass: '400 мл',
        },
        {
          title: 'Жасмин',
          id: 'jasmine-tea',
          price: '580',
          mass: '400 мл',
        },
        {
          title: 'Те Гуань инь',
          id: 'te-guan-yin-tea',
          price: '670',
          mass: '400 мл',
        },
        {
          title: 'Женьшень улун',
          id: 'ginseng-oolong-tea',
          price: '670',
          mass: '400 мл',
        },
        {
          title: 'Молочный улун',
          id: 'milky-oolong-tea',
          price: '670',
          mass: '400 мл',
        },
        {
          title: 'Травяной',
          id: 'herbal-tea',
          price: '450',
          mass: '400 мл',
        },
        {
          title: 'Ромашка',
          id: 'chamomile-tea',
          price: '450',
          mass: '400 мл',
        },
      ],
    },
    {
      title: 'ВЕРМУТЫ',
      id: 'vermouths',
      children: [
        {
          title: 'Martini Bianco Италия',
          id: 'martini-bianco',
          price: '550',
          mass: '100 мл',
        },
        {
          title: 'Martini Dry Италия',
          id: 'martini-dry',
          price: '350',
          mass: '100 мл',
        },
        {
          title: 'Martini Rosso Италия',
          id: 'martini-rosso',
          price: '360',
          mass: '100 мл',
        },
      ],
    },
    {
      title: 'ШАМПАНСКОЕ',
      id: 'champagne',
      children: [
        {
          title: 'Moet & Chandon Brut Imperial Франция',
          id: 'moet-chandon-brut-imperial',
          price: '15750',
          mass: '750 мл',
        },
        {
          title: 'Veuve Clicquot Brut Франция',
          id: 'veuve-clicquot-brut',
          price: '15250',
          mass: '750 мл',
        },
      ],
    },
    {
      title: 'ИГРИСТЫЕ ВИНА',
      id: 'sparkling-wines',
      children: [
        {
          title: 'Josep Ventosa Cava Brut Rose Испания',
          id: 'josep-ventosa-cava-brut-rose',
          price: '4200',
          mass: '750 мл',
        },
        {
          title: "Fiorino d'Oro Moscato Spumante бел/сл Италия",
          id: 'fiorino-doro-moscato-spumante',
          price: '3800',
          mass: '750 мл',
        },
        {
          title: 'Fantinel Prosecco Extra Dry бел/cyx Итачия',
          id: 'fantinel-prosecco-extra-dry',
          price: '4900',
          mass: '750 мл',
        },
        {
          title: 'Fantinel Cuvee Prestige Brut бел/брют Итолия',
          id: 'fantinel-cuvee-prestige-brut',
          price: '5100',
          mass: '750 мл',
        },
      ],
    },
    {
      title: 'БЕЛЫЕ ВИНА',
      id: 'white-wines',
      children: [
        {
          title: 'Fantinel Pinot Grigio Borgo Tesis бел/сух Италия',
          id: 'fantinel-pinot-grigio-borgo-tesis',
          price: '5700',
          mass: '750 мл',
        },
        {
          title: 'Chablis Les Chanoines бел/сух Франция',
          id: 'chablis-les-chanoines',
          price: '6400',
          mass: '750 мл',
        },
        {
          title: 'Fontanafredda Gavi di Gavi бел/сух Италия',
          id: 'fontanafredda-gavi-di-gavi',
          price: '5800',
          mass: '750 мл',
        },
        {
          title: 'Chateau Nekresi Tsinandali бел/сух Грузия',
          id: 'chateau-nekresi-tsinandali',
          price: '3500',
          mass: '750 мл',
        },
      ],
    },
    {
      title: 'КРАСНЫЕ ВИНА',
      id: 'red-wines',
      children: [
        {
          title: 'KWV Classic Shiraz Keyx OAP',
          id: 'kwv-classic-shiraz-keyx-oap',
          price: '3100',
          mass: '750 мл',
        },
        {
          title: 'Pinot Noir La Chevaliere кр/сух Франция',
          id: 'pinot-noir-la-chevaliere',
          price: '3300',
          mass: '750 мл',
        },
        {
          title: 'Chateau Roc de Cazade кр/сух Франция',
          id: 'chateau-roc-de-cazade',
          price: '4300',
          mass: '750 мл',
        },
        {
          title: 'Chateau Nekresi Saperavi кр/сух Грузия',
          id: 'chateau-nekresi-saperavi',
          price: '3500',
          mass: '750 мл',
        },
        {
          title: 'Chateau Nekresi Kindzmarauli кр/пел Грузия',
          id: 'chateau-nekresi-kindzmarauli',
          price: '4500',
          mass: '750 мл',
        },
        {
          title: 'Chateau Nekresi Khvanchkara кр/псл Грузия',
          id: 'chateau-nekresi-khvanchkara',
          price: '5200',
          mass: '750 мл',
        },
        {
          title: 'Kyoun# Kp Ipysus',
          id: 'kyoun-kp-ipysus',
          price: '3600',
          mass: '1000 мл',
        },
      ],
    },
    {
      title: 'ВИНА В БОКАЛЕ',
      id: 'wines-by-the-glass',
      children: [
        {
          title: 'Tsinandali бел/сух Грузия',
          id: 'tsinandali',
          price: '460',
          mass: '150 мл',
        },
        {
          title: 'Saperavi кр/сух Грузия',
          id: 'saperavi',
          price: '490',
          mass: '150 мл',
        },
        {
          title: 'Kindzmarauli кр/пел Грузия',
          id: 'kindzmarauli',
          price: '530',
          mass: '150 мл',
        },
      ],
    },
    {
      title: 'ЧАЧА',
      id: 'chacha',
      children: [
        {
          title: 'Askaneli Грузия',
          id: 'askaneli',
          price: '450',
          mass: '40 мл',
        },
        {
          title: 'MADE IN GEORGIA Грузия',
          id: 'made-in-georgia',
          price: '310',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ВОДКА',
      id: 'vodka',
      children: [
        {
          title: 'Finlandia клюква 1 грейпфрут | классика Финляндия',
          id: 'finlandia',
          price: '350',
          mass: '40 мл',
        },
        {
          title: 'Grey Goose Франция',
          id: 'grey-goose',
          price: '460',
          mass: '40 мл',
        },
        {
          title: 'Чистые Росы Россия',
          id: 'clean-streams',
          price: '390',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'POM',
      id: 'pom',
      children: [
        {
          title: 'Bayou White CA',
          id: 'bayou-white',
          price: '430',
          mass: '40 мл',
        },
        {
          title: 'Bayou Reserve CA',
          id: 'bayou-reserve',
          price: '430',
          mass: '40 мл',
        },
        {
          title: 'Bayou Spiced CA',
          id: 'bayou-spiced',
          price: '490',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ТЕКИЛА',
      id: 'tequila',
      children: [
        {
          title: 'Olmeca Silver',
          id: 'olmeca-silver',
          price: '690',
          mass: '40 мл',
        },
        {
          title: 'Olmeca Gold',
          id: 'olmeca-gold',
          price: '750',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ДЖИН',
      id: 'gin',
      children: [
        {
          title: 'Ben Lomond',
          id: 'ben-lomond',
          price: '680',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ВИСКИ',
      id: 'whiskey',
      children: [
        {
          title: 'Proper Twelve',
          id: 'proper-twelve',
          price: '450',
          mass: '40 мл',
        },
        {
          title: 'Glenmorangie The Original',
          id: 'glenmorangie-the-original',
          price: '890',
          mass: '40 мл',
        },
        {
          title: "Maker's Mark",
          id: 'makers-mark',
          price: '700',
          mass: '40 мл',
        },
        {
          title: 'Chivas Regal 12 years',
          id: 'chivas-regal-12-years',
          price: '770',
          mass: '40 мл',
        },
        {
          title: 'Macallan Triple Cask 12 years',
          id: 'macallan-triple-cask-12-years',
          price: '1900',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'КОНЬЯК',
      id: 'cognac',
      children: [
        {
          title: 'Askaneli VSOP Грузия',
          id: 'askaneli-vsop',
          price: '450',
          mass: '40 мл',
        },
        {
          title: 'Askaneli XO Грузия',
          id: 'askaneli-xo',
          price: '650',
          mass: '40 мл',
        },
        {
          title: 'Hennessy VS Франция',
          id: 'hennessy-vs',
          price: '850',
          mass: '40 мл',
        },
        {
          title: 'Hennessy VSOP Франция',
          id: 'hennessy-vsop',
          price: '1250',
          mass: '40 мл',
        },
        {
          title: 'Hennessy ХО Франция',
          id: 'hennessy-xo',
          price: '2600',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ЛИКЕРЫ',
      id: 'liqueurs',
      children: [
        {
          title: 'Aperol',
          id: 'aperol',
          price: '450',
          mass: '40 мл',
        },
        {
          title: 'Becherovka',
          id: 'becherovka',
          price: '410',
          mass: '40 мл',
        },
        {
          title: 'Sambuca',
          id: 'sambuca',
          price: '430',
          mass: '40 мл',
        },
        {
          title: 'Kahlua',
          id: 'kahlua',
          price: '430',
          mass: '40 мл',
        },
        {
          title: 'Cointreau',
          id: 'cointreau',
          price: '450',
          mass: '40 мл',
        },
        {
          title: 'Absinthe',
          id: 'absinthe',
          price: '430',
          mass: '40 мл',
        },
        {
          title: 'Jägermeister',
          id: 'jagermeister',
          price: '410',
          mass: '40 мл',
        },
        {
          title: 'Baileys',
          id: 'baileys',
          price: '390',
          mass: '40 мл',
        },
      ],
    },
    {
      title: 'ПИВО',
      id: 'beer',
      children: [
        {
          title: 'Leffe светлое Бельгия',
          id: 'leffe-light',
          price: '580',
          mass: '330 мл',
        },
        {
          title: 'Leffe темное Бельгия',
          id: 'leffe-dark',
          price: '580',
          mass: '330 мл',
        },
        {
          title: 'Stiegl cnernoc Aecmpus',
          id: 'stiegl',
          price: '590',
          mass: '500 мл',
        },
        {
          title: 'Inedit свет., нефильтр. Испания',
          id: 'inedit',
          price: '430',
          mass: '330 мл',
        },
        {
          title: 'Clausthaler б/алк Германия',
          id: 'clausthaler',
          price: '390',
          mass: '330 мл',
        },
      ],
    },
    {
      title: 'АЛКОГОЛЬНЫЕ КОКТЕЙЛИ',
      id: 'cocktails',
      children: [
        {
          title: 'Aperol Spritz',
          id: 'aperol-spritz',
          price: '810',
          mass: '300 мл',
        },
        {
          title: 'Margarita',
          id: 'margarita',
          price: '590',
          mass: '200 мл',
        },
        {
          title: 'Mojito',
          id: 'mojito',
          price: '590',
          mass: '300 мл',
        },
        {
          title: 'Strawberry Mojito',
          id: 'strawberry-mojito',
          price: '730',
          mass: '300 мл',
        },
        {
          title: 'Daiquiri',
          id: 'daiquiri',
          price: '590',
          mass: '200 мл',
        },
        {
          title: 'Глинтвейн кр. | бел.',
          id: 'mulled-wine-red-white',
          price: '520',
          mass: '150 мл',
        },
      ],
    },
    {
      title: 'ШОТЫ',
      id: 'shots',
      children: [
        {
          title: 'Б-52',
          id: 'b-52',
          price: '560',
          mass: '50 мл',
        },
        {
          title: 'Б-53',
          id: 'b-53',
          price: '580',
          mass: '50 мл',
        },
      ],
    },
  ],
};

const vineCard = createSlice({
  name: 'vineCard',
  initialState,
});

export default vineCard.reducer;

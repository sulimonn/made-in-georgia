import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [
    {
      title: 'ЗАВТРАКИ',
      id: 'breakfast',
      children: [
        {
          id: 'kasha-ovsyanaia',
          title: 'Каша овсяная',
          mass: '300 г',
          price: '350',
        },
        {
          id: 'kasha-risovaia-s-toppingom',
          title: 'Каша рисовая с топпингом',
          mass: '300 г',
          price: '430',
        },
        {
          id: 'shakshuka',
          title: 'Шакшука',
          mass: '250 г',
          price: '680',
        },
        {
          id: 'glazunia',
          title: 'Глазунья',
          mass: '120 г',
          price: '350',
        },
        {
          id: 'omlet',
          title: 'Омлет',
          mass: '150 г',
          price: '360',
        },
        {
          id: 'topping-na-vybor',
          title: 'Дополнительно топпинг на выбор',
          mass: '0',
          price: '130',
        },
        {
          id: 'blinchiki-s-syrom',
          title: 'Блинчики с сыром',
          mass: '3 шт',
          price: '390',
        },
        {
          id: 'blinchiki-s-myasom',
          title: 'Блинчики с мясом',
          mass: '3 шт',
          price: '580',
        },
        {
          id: 'blinchiki-s-tvorogom',
          title: 'Блинчики с творогом',
          mass: '2 шт',
          price: '490',
        },
        {
          id: 'syrniki',
          title: 'Сырники',
          mass: '3 шт',
          price: '450',
        },
        {
          id: 'khinkali-s-klubnikoi',
          title: 'Хинкали с клубникой',
          mass: '3 шт / 300 г',
          price: '380',
        },
        {
          id: 'khinkali-s-vishnei',
          title: 'Хинкали с вишней',
          mass: '3 шт / 300 г',
          price: '360',
        },
      ],
    },
    {
      title: 'ХОЛОДНЫЕ ЗАКУСКИ',
      id: 'dishes',
      children: [
        {
          id: 'assorti-phali',
          title: 'Ассорти пхали',
          mass: '160 г',
          price: '550',
        },
        {
          id: 'phali-iz-svekly',
          title: 'Пхали из свеклы',
          mass: '160 г',
          price: '310',
        },
        {
          id: 'phali-iz-zelenoi-fasoli',
          title: 'Пхали из зелёной фасоли',
          mass: '160 г',
          price: '420',
        },
        {
          id: 'phali-iz-shpinata',
          title: 'Пхали из шпината',
          mass: '160 г',
          price: '540',
        },
        {
          id: 'baklazhany-zharennye-s-gretskim-orekhom',
          title: 'Баклажаны жаренные с грецким орехом',
          mass: '160 г',
          price: '510',
        },
        {
          id: 'adjapsandali',
          title: 'Аджапсандали',
          mass: '230 г',
          price: '560',
        },
        {
          id: 'lobio-s-gretskimi-orekhami',
          title: 'Лобио с грецкими орехами',
          mass: '200 г',
          price: '350',
        },
        {
          id: 'satsivi-iz-kuritsy',
          title: 'Сациви из курицы',
          mass: '240 г',
          price: '690',
        },
        {
          id: 'syr-suluguni-imetinskii',
          title: 'Сыр Сулугуни / Имеретинский',
          mass: '150 г',
          price: '350',
        },
        {
          id: 'assorti-domashnikh-soleniy',
          title: 'Ассорти домашних солений',
          mass: '360 г',
          price: '520',
        },
        {
          id: 'assorti-ovoshchnoe',
          title: 'Ассорти овощное',
          mass: '350 г',
          price: '980',
        },
        {
          id: 'seld-s-kartofelem',
          title: 'Сельдь с картофелем',
          mass: '240 г',
          price: '410',
        },
        {
          id: 'siomga-slabosolionaia',
          title: 'Сёмга слабосолёная',
          mass: '150 г',
          price: '870',
        },
        {
          id: 'yazyk-goviazhi',
          title: 'Язык говяжий',
          mass: '150 г',
          price: '690',
        },
        {
          id: 'tadzhaski-olivki-masl',
          title: 'Таджаски оливки / маслины',
          mass: '50 г',
          price: '440',
        },
      ],
    },
    {
      title: 'САЛАТЫ',
      id: 'salads',
      children: [
        {
          id: 'ovoshchnoi-salat-s-kakhetinskim-maslom',
          title: 'Овощной салат с кахетинским маслом',
          mass: '230 г',
          price: '570',
        },
        {
          id: 'ovoshchnoi-salat-po-gruzinski-s-gretskim-orekhom',
          title: 'Овощной салат по-грузински с грецким орехом',
          mass: '240 г',
          price: '610',
        },
        {
          id: 'sladkie-pomidory-s-krasnym-lukom-i-suluguni',
          title: 'Сладкие помидоры с красным луком и Сулугуни',
          mass: '240 г',
          price: '650',
        },
        {
          id: 'hrustashchie-baklazhany-s-tomatami',
          title: 'Хрустящие баклажаны с томатами',
          mass: '220 г',
          price: '570',
        },
        {
          id: 'olivie-s-yazykom',
          title: 'Оливье с языком',
          mass: '250 г',
          price: '650',
        },
        {
          id: 'ovoschnoi-salat-po-domashnemu',
          title: 'Овощной салат по-домашнему',
          mass: '230 г',
          price: '610',
        },
        {
          id: 'salat-so-slabosolenoi-siomgoi',
          title: 'Салат со слабосоленой сёмгой',
          mass: '210 г',
          price: '1190',
        },
        {
          id: 'salat-iz-svezhei-kapusty',
          title: 'Салат из свежей капусты',
          mass: '150 г',
          price: '230',
        },
        {
          id: 'tsezar-s-kuritsei',
          title: 'Цезарь с курицей',
          mass: '220 г',
          price: '650',
        },
      ],
    },
    {
      title: 'ГОРЯЧИЕ ЗАКУСКИ',
      id: 'hot-dishes',
      children: [
        {
          id: 'suluguni-s-tomatami-na-ketsi',
          title: 'Сулугуни с томатами на кеци',
          mass: '250 г',
          price: '650',
        },
        {
          id: 'dolma-iz-telyatiny-v-vinogradnykh-listyakh',
          title: 'Долма из телятины в виноградных листьях',
          mass: '250 г',
          price: '690',
        },
        {
          id: 'shampinony-s-syrom-suluguni-na-ketsi',
          title: 'Шампиньоны с сыром Сулугуни на кеци',
          mass: '250 г',
          price: '560',
        },
        {
          id: 'lobio-po-megrelski-s-guriiskoi-kapustoi',
          title: 'Лобио по-мегрельски с гурийской капустой',
          mass: '450 г',
          price: '690',
        },
        {
          id: 'shariki-elardzhi-s-sousom-bazhe',
          title: 'Шарики Эларджи с соусом Баже',
          mass: '200 г',
          price: '360',
        },
        {
          id: 'kuchmachi-iz-goviadiny-na-ketsi',
          title: 'Кучмачи из говядины на кеци',
          mass: '200 г',
          price: '590',
        },
        {
          id: 'zharenyi-syr-suluguni',
          title: 'Жареный сыр Сулугуни',
          mass: '250 г',
          price: '510',
        },
        {
          id: 'shaurma-po-gruzinski-s-kuritsei',
          title: 'Шаурма по-грузински с курицей',
          mass: '380 г',
          price: '690',
        },
        {
          id: 'shaurma-po-gruzinski-s-telyatinoi',
          title: 'Шаурма по-грузински с телятиной',
          mass: '380 г',
          price: '1170',
        },
        {
          id: 'shaurma-po-gruzinski-s-baraninoi',
          title: 'Шаурма по-грузински с бараниной',
          mass: '380 г',
          price: '890',
        },
        {
          id: 'mamalyga-s-syrom-suluguni',
          title: 'Мамалыга с сыром Сулугуни',
          mass: '250 г',
          price: '420',
        },
        {
          id: 'elardzhi',
          title: 'Эларджи',
          mass: '250 г',
          price: '480',
        },
      ],
    },
    {
      id: 'hinkali',
      title: 'ХИНКАЛИ',
      children: [
        {
          id: 'khinkali-s-baraninoi',
          title: 'Хинкали с бараниной',
          mass: '3 шт | 320 г',
          price: '450',
        },
        {
          id: 'khinkali-s-goviadinoy',
          title: 'Хинкали с говядиной',
          mass: '3 шт | 320 г',
          price: '450',
        },
        {
          id: 'khinkali-s-syrom-suluguni',
          title: 'Хинкали с сыром Сулугуни',
          mass: '3 шт | 280 г',
          price: '420',
        },
      ],
    },
    {
      id: 'suppes',
      title: 'СУПЫ',
      children: [
        {
          id: 'sup-harcho',
          title: 'Суп Харчо',
          mass: '300 г',
          price: '690',
        },
        {
          id: 'navaristy-bulon-s-mini-khinkali',
          title: 'Наваристый бульон с мини-хинкали',
          mass: '300 г',
          price: '510',
        },
        {
          id: 'sup-rybnyi-po-gruzinski',
          title: 'Суп рыбный по-грузински',
          mass: '300 г',
          price: '1120',
        },
        {
          id: 'borsch-s-goviadinoy',
          title: 'Борщ с говядиной',
          mass: '300 г',
          price: '640',
        },
        {
          id: 'sup-s-lapshoi-iz-fermerskoy-kuritsy',
          title: 'Суп с лапшой из фермерской курицы',
          mass: '300 г',
          price: '530',
        },
        {
          id: 'solyanka-sbornaya-myasnaya',
          title: 'Солянка сборная мясная',
          mass: '300 г',
          price: '860',
        },
      ],
    },
    {
      id: 'hot-meat-dishes',
      title: 'ГОРЯЧИЕ МЯСНЫЕ БЛЮДА',
      children: [
        {
          id: 'khinkali-s-baraninoi',
          title: 'Хинкали с бараниной',
          mass: '3 шт | 320 г',
          price: '450',
        },
        {
          id: 'khinkali-s-goviadinoy',
          title: 'Хинкали с говядиной',
          mass: '3 шт | 320 г',
          price: '450',
        },
        {
          id: 'khinkali-s-syrom-suluguni',
          title: 'Хинкали с сыром Сулугуни',
          mass: '3 шт | 280 г',
          price: '420',
        },
        {
          id: 'chakhokhbili',
          title: 'Чахохбили',
          mass: '350 г',
          price: '860',
        },
        {
          id: 'odzhakhuri-s-kuritsey',
          title: 'Оджахури с курицей',
          mass: '320 г',
          price: '760',
        },
        {
          id: 'chashushuli-iz-telyatiny',
          title: 'Чашушули из телятины',
          mass: '300 г',
          price: '880',
        },
        {
          id: 'odzhakhuri-s-baraninoy',
          title: 'Оджахури с бараниной',
          mass: '320 г',
          price: '1110',
        },
        {
          id: 'kharcho-po-megrelski-s-tsyplenkom',
          title: 'Харчо по-мегрельски с цыпленком',
          mass: '440 г',
          price: '850',
        },
        {
          id: 'odzhakhuri-iz-telyatiny-na-keci',
          title: 'Оджахури из телятины на кеци',
          mass: '350 г',
          price: '890',
        },
        {
          id: 'chanahi-iz-baraniny-v-gorshochke',
          title: 'Чанахи из баранины в горшочке',
          mass: '400 г',
          price: '930',
        },
        {
          id: 'perepelka-s-elardzhi',
          title: 'Перепелка с эларджи',
          mass: '350 г',
          price: '1570',
        },
        {
          id: 'tsyplenyok-chkmeruli-na-keci',
          title: 'Цыплёнок Чкмерули на кеци',
          mass: '400 г',
          price: '870',
        },
        {
          id: 'tsyplenyok-tapaka-na-keci',
          title: 'Цыплёнок Тапака на кеци',
          mass: '1 шт',
          price: '1110',
        },
        {
          id: 'lyulya-kebab-iz-baraniny',
          title: 'Люля-кебаб из баранины',
          mass: '160 г',
          price: '790',
        },
        {
          id: 'lyulya-kebab-iz-kuritsy',
          title: 'Люля-кебаб из курицы',
          mass: '160 г',
          price: '530',
        },
        {
          id: 'shashlyk-iz-baraniny',
          title: 'Шашлык из баранины',
          mass: '170 г',
          price: '890',
        },
        {
          id: 'shashlyk-iz-kuritsy',
          title: 'Шашлык из курицы',
          mass: '170 г',
          price: '490',
        },
        {
          id: 'koreika-teliatiny-s-baby-kartofelem',
          title: 'Корейка телятины с бэби-картофелем',
          mass: '300 г',
          price: '2610',
        },
        {
          id: 'kotlety-iz-indeiki-s-piure-iz-brokkoli',
          title: 'Котлеты из индейки с пюре из брокколи',
          mass: '350 г',
          price: '690',
        },
        {
          id: 'koreika-teliatiny-s-ovoshchami',
          title: 'Корейка телятины с овощами',
          mass: '300 г',
          price: '2760',
        },
        {
          id: 'shnitsel-po-milanski',
          title: 'Шницель по-милански',
          mass: '250 г',
          price: '870',
        },
        {
          id: 'kare-iagnionka',
          title: 'Каре ягнёнка',
          mass: '210 г',
          price: '2310',
        },
        {
          id: 'befstroganov-iz-teliatiny',
          title: 'Бефстроганов из телятины',
          mass: '300 г',
          price: '990',
        },
        {
          id: 'fermerskii-tsyplionok-iz-pechi',
          title: 'Фермерский цыплёнок из печи',
          mass: '1 шт',
          price: '1110',
        },
        {
          id: 'dorado-na-grile',
          title: 'Дорадо на гриле',
          mass: '1 шт',
          price: '1150',
        },
        {
          id: 'sibas-na-grile',
          title: 'Сибас на гриле',
          mass: '1 шт',
          price: '1270',
        },
        {
          id: 'steik-iz-siomgi-v-slivochnom-souse-so-shpinatom',
          title: 'Стейк из сёмги в сливочном соусе со шпинатом',
          mass: '240 г',
          price: '1780',
        },
        {
          id: 'file-dorado-na-poduske-so-shpinatom',
          title: 'Филе Дорадо на подушке со шпинатом',
          mass: '250 г',
          price: '990',
        },
        {
          id: 'penne-s-lososem-v-slivochnom-souse',
          title: 'Пенне с лососем в сливочном соусе',
          mass: '300 г',
          price: '1190',
        },
      ],
    },
    {
      id: 'vapechka',
      title: 'Выпечка',
      children: [
        {
          id: 'khachapuri-po-adzharski',
          title: 'Хачапури по-аджарски с тестом | без теста',
          mass: '420 г | 350 г',
          price: '620',
        },
        {
          id: 'khachapuri-po-imeretinski',
          title: 'Хачапури по-имеретински',
          mass: '420 г',
          price: '550',
        },
        {
          id: 'khachapuri-po-megrelski',
          title: 'Хачапури по-мегрельски',
          mass: '450 г',
          price: '590',
        },
        {
          id: 'khachapuri-so-shpinatom-i-syrom',
          title: 'Хачапури со шпинатом и сыром',
          mass: '420 г',
          price: '550',
        },
        {
          id: 'penovani',
          title: 'Пеновани',
          mass: '330 г',
          price: '450',
        },
        {
          id: 'kubdari',
          title: 'Кубдари',
          mass: '490 г',
          price: '870',
        },
        {
          id: 'achma',
          title: 'Ачма',
          mass: '300 г',
          price: '550',
        },
        {
          id: 'mchadi-s-syrom',
          title: 'Мчади с сыром',
          mass: '255 г',
          price: '350',
        },
        {
          id: 'chvishtari',
          title: 'Чвиштари',
          mass: '200 г',
          price: '350',
        },
        {
          id: 'fokacha-po-gruzinski',
          title: 'Фокача по-грузински',
          mass: '120 г',
          price: '170',
        },
        {
          id: 'lavash',
          title: 'Лаваш',
          mass: '150 г',
          price: '150',
        },
      ],
    },
    {
      id: 'garnir',
      title: 'ГАРНИРЫ',
      children: [
        {
          id: 'tsukini-na-grile-paru',
          title: 'Цукини на гриле / пару',
          mass: '150 г',
          price: '430',
        },
        {
          id: 'baklazhany-na-grile-paru',
          title: 'Баклажаны на гриле / пару',
          mass: '150 г',
          price: '520',
        },
        {
          id: 'dikiy-ris',
          title: 'Дикий рис',
          mass: '150 г',
          price: '450',
        },
        {
          id: 'ovoshi-na-grile',
          title: 'Овощи на гриле',
          mass: '150 г',
          price: '520',
        },
        {
          id: 'kartofel-jarenyj-s-gribami',
          title: 'Картофель жареный с грибами',
          mass: '250 г',
          price: '430',
        },
        {
          id: 'ris-basmati',
          title: 'Рис Басмати',
          mass: '150 г',
          price: '390',
        },
        {
          id: 'grechka',
          title: 'Гречка',
          mass: '150 г',
          price: '360',
        },
        {
          id: 'kartofel-fri',
          title: 'Картофель фри',
          mass: '150 г',
          price: '330',
        },
        {
          id: 'shampinony-na-grile',
          title: 'Шампиньоны на гриле',
          mass: '150 г',
          price: '350',
        },
        {
          id: 'kartofelnoe-pyure',
          title: 'Картофельное пюре',
          mass: '150 г',
          price: '330',
        },
      ],
    },
    {
      id: 'sauces',
      title: 'СОУСЫ',
      children: [
        {
          id: 'bazhe',
          title: 'Баже',
          mass: '100 г',
          price: '250',
        },
        {
          id: 'narsharab',
          title: 'Наршараб',
          mass: '50 г',
          price: '130',
        },
        {
          id: 'chesnochnyj',
          title: 'Чесночный',
          mass: '50 г',
          price: '200',
        },
        {
          id: 'smetana',
          title: 'Сметана',
          mass: '50 г',
          price: '90',
        },
        {
          id: 'adjika',
          title: 'Аджика',
          mass: '50 г',
          price: '200',
        },
        {
          id: 'sacebeli',
          title: 'Сацебели',
          mass: '50 г',
          price: '200',
        },
        {
          id: 'tkemali',
          title: 'Ткемали',
          mass: '50 г',
          price: '200',
        },
      ],
    },
    {
      title: 'ДЕСЕРТЫ',
      id: 'deserts',
      children: [
        {
          id: 'made-in-georgia',
          title: 'MADE IN GEORGIA',
          mass: '120 г',
          price: '550',
        },
        {
          id: 'matsoni-s-medom-i-orehami',
          title: 'Мацони с мёдом и орехами',
          mass: '130 г',
          price: '230',
        },
        {
          id: 'medovik',
          title: 'Медовик',
          mass: '120 г',
          price: '470',
        },
        {
          id: 'napoleon',
          title: 'Наполеон',
          mass: '120 г',
          price: '450',
        },
        {
          id: 'merengovyi-rulet-s-fistashkoi-i-malinoy',
          title: 'Меренговый рулет с фисташкой и малиной',
          mass: '110 г',
          price: '540',
        },
        {
          id: 'shtyudel',
          title: 'Штрудель',
          mass: '120 г',
          price: '510',
        },
        {
          id: 'morozhenoe-moevenpick',
          title: 'Мороженое "Mövenpick"',
          mass: '150 г',
          price: '350',
        },
        {
          id: 'varenie-v-assortimente',
          title: 'Варенье в ассортименте',
          mass: '50 г',
          price: '190',
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

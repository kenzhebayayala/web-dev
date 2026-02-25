import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    categories: Category[] = [{ id: 1, name: 'Computers' },
    { id: 2, name: 'TVs' },
    { id: 3, name: 'smartwatches' },
    { id: 4, name: 'Smartphones' }
    ];

    products: Product[] = [
        {
            id: 1,
            name: 'Ноутбук YAMI Notebook HX14 14.1',
            price: 118990,
            description: 'YAMI HX14 — это компактный и лёгкий ноутбук, созданный специально для учёбы, поездок и простых повседневных задач. Его удобно брать с собой на занятия, в библиотеку, в офис или даже в путешествия: при весе всего 1.4 кг он не утяжелит рюкзак и легко поместится в сумку.',
            link: 'https://l.kaspi.kz/shop/HbXVPVQZhKWCj35',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/p4c/81729433.png?format=gallery-medium',
            likes: 0,
            categoryId: 1
        },
        {
            id: 2,
            name: 'MacBook Air 13 2020 ',
            price: 439985 ,
            description: 'Маленький чип. Грандиозный прорыв,8‑ядерный процессор. Дольше работает. Меньше ест,Дисплей Retina. Нереально. Реалистичные цвета ,Камера и микрофоны. Это чтобы лучше видеть и слышать вас,Magic Keyboard. Клавиатура — высший класс',
            link: 'https://l.kaspi.kz/shop/d8V9x1XNPpWRSH2',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            likes: 0,
            categoryId: 1
        },
        {
            id: 3,
           name: 'ASUS TUF Gaming F16 16 ',
            price: 625989,
            description: 'ASUS TUF Gaming F16 16" / 16 Гб / SSD 512 Гб / Без ОС / 90NR0MH1-M003V0, ',
            link: 'https://l.kaspi.kz/shop/GprKBmJvCxsLQjU',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p7e/61910315.jpg?format=gallery-medium',
           likes: 0,
            categoryId: 1
        },
        {
            id: 4,
            name: ' Apple MacBook Pro 16 2024 ',
            price: 2971990,
            description: '16.2" / 48 Гб / SSD 1000 Гб / macOS',
            link: 'https://l.kaspi.kz/shop/3wzFCRt1idT3Fvf',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p1c/18087106.png?format=gallery-medium',
            likes: 0,
            categoryId: 1
        },
       {
            id:5,
            name: ' ASUS TUF Gaming F15 15.6 ',
            price: 949869,
            description: ' / 16 Гб / SSD 1024 Гб / Без ОС / FX507VI-LP075 / 90NR0FH7-M003M0',
            link: 'https://l.kaspi.kz/shop/F3JnAhtaCujXajR',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/p67/14074562.jpg?format=gallery-medium',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/p67/14074564.jpg?format=gallery-medium ',' https://resources.cdn-kaspi.kz/img/m/p/p07/p67/14074565.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p5b/p67/14074562.jpg?format=gallery-medium'],
            likes: 0,
            categoryId: 1
       },
        {
            id: 6,
            name: ' Toshiba 43V35RE',
            price: 124990,
            description: 'RU 109 см черный',
            link: 'https://l.kaspi.kz/shop/14qg2GUzpaUwgbf',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p10/63421508.png?format=gallery-medium',
            likes: 0,
            categoryId: 2
        },
        {
            id: 7,
            name: ' Samsung UE55U8000FUXKZ',
            price:278990 ,
            description: 'Телевизор Samsung UE55U8000FUXKZ 140 см черный',
            link: 'https://l.kaspi.kz/shop/AtEQMsptdDj8BQw',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p68/80458971.jpg?format=gallery-medium',
           likes: 0,
            categoryId: 2
        },
        {
            id: 8,
            name: ' Xiaomi A ',
            price:159990 ,
            description: 'Телевизор Xiaomi A 2026 L50MB-ARU 127 см черный',
            link: 'https://l.kaspi.kz/shop/EX618fcDnwsJfMr',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/p4d/99128683.jpg?format=gallery-medium',
            likes: 0,
            categoryId: 2
        },

        {
            id: 9,
            name: 'YNDX-00076 ',
            price: 238652,
            description: 'Телевизор Яндекс Бейсик с Алисой YNDX-00076 140 см черный',
            link: 'https://l.kaspi.kz/shop/9SZ439WXwoAG7oG',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p12/25408606.jpg?format=gallery-medium',
            likes: 0,
            categoryId: 2
        },
        {
            id: 10,
            name: ' Apple Watch',
            price: 217670,
            description: 'Смарт-часы Apple Watch Series 11 M/L 46 мм черный',
            link: 'https://l.kaspi.kz/shop/5JrFdweui55TfVm',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
            likes: 0,
            categoryId: 3
        },

        {
            id: 11,
            name: 'Garmin QUATIX ',
            price: 643990,
            description: 'Смарт-часы Garmin QUATIX 8 47 мм серебристый-синий',
            link: 'https://l.kaspi.kz/shop/FVCDvS6uHjoEacC',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p40/54289038.jpeg?format=gallery-medium',
            likes: 0,
            categoryId: 3
        },
        {
            id: 12,
            name: ' NOLIMIT GPS ',
            price: 39990,
            description: 'Смарт-часы NOLIMIT GPS — надежный помощник для активной жизни, сочетающий прочность, точный трекинг и удобную связь со смартфоном.',
            link: 'https://l.kaspi.kz/shop/3otL6pEZ3PQkA5R',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
            likes: 0,
            categoryId: 3
        },
        {
            id: 13,
            name: 'Смарт-часы NOLIMIT GRAF черный ',
            price:44900 ,
            description: 'Смарт-часы NOLIMIT GRAF— надежный помощник для активной жизни, сочетающий прочность, точный трекинг и удобную связь со смартфоном.',
            link: 'https://l.kaspi.kz/shop/JB2NruheAcy9nTC',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
            likes: 0,
            categoryId: 3
        },
        {
            id: 14,
            name: 'Apple Watch SE ',
            price: 105979,
            description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 40 мм черно-синий',
            link: 'https://l.kaspi.kz/shop/JB2NruheAcy9nTC',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p48/7355054.jpg?format=gallery-medium',
            likes: 0,
            categoryId: 3
        },
        {
            id: 15,
            name: 'iPhone 17',
            price: 793717,
            description: 'Смартфон Apple iPhone 17 512Gb Dual eSim фиолетовый',
            link: 'https://l.kaspi.kz/shop/JNCHX4e5VewwYc2',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p41/p2d/74126834.jpeg?format=gallery-medium',
            likes: 0,
            categoryId: 4
        },
        {
            id: 16,
           name: 'iPhone Air ',
            price: 574994,
            description: 'Смартфон Apple iPhone Air 256Gb белый',
            link: 'https://l.kaspi.kz/shop/2h2NNPTYoCJSLGH',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p21/64170900.png?format=gallery-medium',
           likes: 0,
            categoryId: 4
        },
        {
            id: 17,
            name: 'Samsung Galaxy S25 Ultra  ',
            price: 559356,
            description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой',
            link: 'https://l.kaspi.kz/shop/D1XeYoLbbDiucQ2',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
            likes: 0,
            categoryId: 4
        },
        {
            id: 17,
            name: 'Samsung Galaxy S25 Ultra  ',
            price: 559356,
            description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой',
            link: 'https://l.kaspi.kz/shop/D1XeYoLbbDiucQ2',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
            likes: 0,
            categoryId: 4
        },
        {
            id: 19,
            name: 'Samsung Galaxy A56 ',
            price: 207136,
            description: 'Samsung Galaxy A56 5G — мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником в повседневных задачах и развлечениях.',
            link: 'https://l.kaspi.kz/shop/HQAcS2pj75pSGH8',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/pa3/30496239.png?format=gallery-medium',
            likes: 0,
            categoryId: 4
        },
        {
            id: 20,
            name: 'CUBOT KingKong AX 12 ',
            price:180000 ,
            description: 'Характеристики Смартфон CUBOT KingKong AX 12 ГБ/256 ГБ черный',
            link: 'https://l.kaspi.kz/shop/DVUchvTWwqFUF1c',
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hb2/85943629381662.png?format=gallery-medium',
            likes: 0,
            categoryId: 4
        }
    ];


    selectCategoryId!: number;


    getCategories(): Category[] {
        return this.categories;
    }
    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId);
    }

    selectCategories(id: number): void {
        this.selectCategoryId = id;
    }

    getProducts(): Product[] {
        return this.products;
    }

}
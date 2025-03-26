<?php
const PHONE = '+7 (499) 677-58-76';
const PHONE_LINK = '74996775876';
const MAIL = 'info@mojka-alpinistami.vercel.app';
const WHATSAPP_LINK = '+74996775876';
const ADDRESS = 'Москва, ул.Ленина 52, офис 105';

const TG_TOKEN = '6088125677:AAEa_IWVuHd3hSTlYkVNJqRiU7CO6ThmVhA';
const TG_CHAT = '-4110856619';

const MAIL_ZAYAVKI = 'festenm@yandex.ru';
const CODE_WEBMASTER = '<meta name="yandex-verification" content="874ea9040db77032" />';
const CODE_GOOGLE = '';
const SITE_LINK = 'mojka-alpinistami.vercel.app';

$REDIRECT = [
//    Эти 2 записи должны быть всегда
    "404" => [
        "title" => "Страница не найдена",
        "meta_description" => "Упс, вы попали на страницу которой не существует. Пожалуйста, вернитесь на главную",
        "id" => "404",
        "page" => "404"
    ],
    "error" => [
        "page" => "error"
    ],
//    Эти 2 записи должны быть всегда
//    Только главная страница выглядит таким образом. Пустые ковычки и только page = index.
    "" => [
        "title" => "Мойка окон АЛЬПИНИСТАМИ в Москве: ЦЕНА на мытье остекления промышленным альпинистом",
        "meta_description" => "ОФИЦИАЛЬНЫЙ сайт. Мойка окон альпинистом  - БЕСПЛАТНЫЙ онлайн-калькулятор. Стоимость от 190 рублей за м2. СКИДКИ до 25%. РЕЙТИНГ 5/5. Выезд и диагностика БЕСПЛАТНО!",
        "id" => "",
        "page" => "index"
    ],
];
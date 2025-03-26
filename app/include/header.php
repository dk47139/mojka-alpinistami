<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset='UTF-8'>
    <!--	<script src='custom-scripts/bd.min.js?v=5' defer></script>-->
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name='application-name' content='&nbsp;'>
    <meta name='msapplication-TileColor' content='#FFFFFF'>
    <meta name='msapplication-TileImage' content='/images/favicons/mstile-144x144.png'>


    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Название вашей компании",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "<?= ADDRESS?>",
                "addressCountry": "Россия"
            },
            "telephone": "<?= PHONE_LINK?>",
            "email": "<?= MAIL?>",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "<?= SITE_LINK?>"
            },
            "url": "https://<?= SITE_LINK?>",
            "logo": "https://<?= SITE_LINK?>/assets/images/katalog/logo.png"
        }
    </script>

    <!-- Иконки для сайтай  -->
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!--  Каноничная ссылка на страницы  -->
    <?php
        if ($XNOW["page"] == "index"){
            ?>
    <link rel="canonical" href="https://<?= SITE_LINK?>">
        <?php
        }else {
            ?>
    <link rel="canonical" href="https://<?= SITE_LINK?>/<?= $XNOW["id"] ?>">
        <?php
        }
    ?>

    <title><?= $XNOW["title"] ?></title>
    <meta name='description' content='<?= $XNOW["meta_description"] ?>'>

    <meta property='og:locale' content='ru_RU'>
    <meta property='og:type' content='website'>
    <meta property='og:url' content='<?php echo SITE_LINK?>/<?= $XNOW["id"] ?>'>
    <meta property='og:image' content='https://<?= SITE_LINK?>/icon-512.png'>
    <meta property='og:image:width' content='512'>
    <meta property='og:image:height' content='512'>


<!--    <link rel="preload" href="./assets/images/katalog/remont.webp" as="image">
    <link rel="preload" href="./assets/images/katalog/nagrada.webp" as="image">
    <link rel="preload" href="./assets/images/clouds.png" as="image">-->

    <link rel="stylesheet" href="./assets/css/style.css"/>
<!--    <link rel="stylesheet" href="/assets/css/my-form.css"/>-->
    <!--КОД ВЕБМАСТЕРА-->
    <?php echo CODE_WEBMASTER?>
    <?php echo CODE_GOOGLE?>




</head>

<?php
//  Уберу фон со служебных страниц и с главной
$pages_url = ["index","o-kompanii", "rassrochka", "garantii", "portfolio", "oplata-i-vozvrat", "skidki", "dostavka", "vakansii", "kontakty", "faq"];
if (in_array($XNOW["page"], $pages_url)){
    ?>
        <body class="none_bg">
    <?
}else{
    ?>
        <body>
    <?
    }
?>

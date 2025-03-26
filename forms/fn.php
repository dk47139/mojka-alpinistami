<?php
include_once "../public_html/index.php";
function phpmailer($komy, $title, $htmlBody, $textBody = '', $attach = [])
{     //$attach - файлы
    $config = array(
        'from_name' => 'МОЙКА ОКОН',      // отображение (МЕНЯЙТЕ ЕГО НА СВОЕ)
        'from_email' => 'mail@'.SITE_LINK,      // Можно НЕ менять (тут автоматически будет ваш домен)
        'smtp_mode' => 'disabled',              // Если у вас Бегет, то НЕ изменяйте
        'smtp_host' => 'smtp.beget.com',        // Если у вас Бегет, то НЕ изменяйте
        'smtp_port' => '25',                    // Если у вас Бегет, то НЕ изменяйте
        'smtp_username' => 'mail@'.SITE_LINK,   // Можно НЕ менять (тут автоматически будет ваш домен)
        'smtp_pw' => 'Qwerty12345',             // пароль (МЕНЯЙТЕ ЕГО НА СВОЙ)
    );
    require_once 'class.phpmailer.php';
    $mail = new PHPMailer(); // defaults to using php "mail()"
    $mail->ClearAddresses();
    $mail->ClearAttachments();
    //АВТОРИЗАЦИЯ
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['from_email'];
    $mail->Password = $config['smtp_pw'];
    $mail->SMTPSecure = 'TLS';
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';
//  прикрепляем файл  ФАЙЛ
    if (isset($_FILES['userfile'])) {
        $mail->addAttachment($_FILES['userfile']['tmp_name'], $_FILES['userfile']['name']);
    }
    //ОТ КОГО
    $mail->From = $config['from_email'];
    $mail->FromName = $config['from_name'];
    if (!empty($attach)) {
        foreach ($attach as $k => $v) {        //$k
            $mail->addAttachment(HOME . $v, $v);
        }
    }
    //КОМУ
    $mail->AddAddress($komy);
    $mail->AddReplyTo($config['from_email'], $config['from_name']);   //адрес ответа
    //ПИСЬМО
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $htmlBody;
    $mail->AltBody = (!empty($textBody)) ? $textBody : $htmlBody;
    $mail->IsSendmail();
    if ($mail->Send()) {
        return 1;
    } else {
        return 0;
    }
}




if (isset($_POST) && is_array($_POST)) {
    $data = [];
    $dataTelega = [];

    foreach ($_POST as $key => $value) {
        $data[] = '<p><b>' . $key . ' : ' . '</b>' . $value . '</p>';
        $dataTelega[] = '<b>' . $key . ': </b>' . $value;
    }

    $data[0] = implode("\n", $data);
    $dataTelega[0] = implode("\n", $dataTelega);

    $htmlBody = <<<HREF
<head>
<title>3АЯВКА</title>
</head>
<body>

<h2>3АЯВКА С САЙТА!</h2>
$data[0]
<br>
<br>
<p>Отсюда: <a href="{$_SERVER['HTTP_REFERER']}" title="PHP Freaks">{$_SERVER['HTTP_REFERER']}</a></p>
HREF;

    $m1 = phpmailer(MAIL_ZAYAVKI, 'МОЙКА ОКОН', $htmlBody);
//    $m1 = phpmailer("example@mail.ru", 'ВЫРУБКА ДЕРЕВЬЕВ', $htmlBody);
// если нужен еще 1 адрес почты, уберите // в самом начале и поменяйте example@mail.ru на свою почту


    $telegram = 0;
    if (1) {
        $parametrs = [
            'chat_id' => TG_CHAT,
            'parse_mode' => 'html',
            'text' => $dataTelega[0]
        ];
        $url = 'https://api.telegram.org/bot' . TG_TOKEN . '/sendMessage?' . http_build_query($parametrs);
        file_get_contents($url);
        $telegram = 1;
    }

    if ($m1 || $telegram) {
        echo 'success';
    } else {
        echo 0;
    }
}
exit;


?>
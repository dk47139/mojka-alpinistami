<!DOCTYPE html>
<html lang='ru'>
<head>
	<meta charset='utf-8'>
	<title>Спасибо за заявку!</title>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'/>
	<meta name='description' content='Благодарим за заявку'/>
	<link rel='icon' href='/favicon.ico' type='image/x-icon'>
	<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon'>
	<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">

    <!--КОД ВЕБМАСТЕРА-->
    <?php echo CODE_WEBMASTER?>

</head>
<body>
<style>
	body {
		font-family: "PT Sans",sans-serif;
		color: #3b4552;
		min-height: 100vh;
		position: relative;
		margin: 0;
	}
	.content-thanks {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.content-thanks > .text {
		z-index: 10;
		text-align: center;
	}
	.content-thanks > .text h1 {
		margin-bottom: 10px;
		color: #1fc71f;
	}
	.content-thanks > .text p {
		font-size: 18px;
		margin: 0;
		margin-bottom: 20px;
	}
	.content-thanks > .text a {
		font-size: 16px;
		font-weight: bold;
		text-decoration: underline;
	}
	/*.content-thanks::before{*/
	/*	content: "СПАСИБО";*/
	/*	font-size: 96px;*/
	/*	position: absolute;*/
	/*	color: #f3f3f3;*/
	/*	font-weight: bold;*/
	/*	z-index: 0;*/
	/*}*/
	video {
		display: block;
		max-width: 720px;
		margin-bottom: 15px;
	}
	@media (max-width: 425px){
		/*.content-thanks::before{*/
		/*	font-size: 60px;*/
		/*}*/
		.content-thanks>.text h1{
			font-size: 28px;
			padding: 0 10px;
		}
		.content-thanks>.text p{
			font-size: 14px;
			padding: 0 10px;
		}
	}
</style>
	<div class='content-thanks'>
		<div class='text'>
			<h1>Спасибо за заявку!</h1>
			<p class='response'>Мы свяжемся с вами в ближайшее время</p>
<!--			<a href='/Портфолио-и-Прайс.pdf' download>Скачать прайс лист со всеми товарами</a>-->
			</br>
			</br>
			<a href='/'>Вернуться на главную</a>
		</div>
	</div>

<script>
    let resp = document.querySelector('.response'),
        date = new Date();
    if(date.getUTCHours() +2  >= 20){
        resp.textContent = 'Простите, но все менеджеры уже уехали из офиса, мы свяжемся с вами завтра'
    }else if (date.getUTCHours() + 2 <= 8){
        resp.textContent = 'Простите, но рабочий день еще не наступил. Мы свяжемся с Вами очень скоро!'
    }else{
        resp.textContent = 'Мы свяжемся с вами в ближайшее время'
    }

    console.log(date.getUTCHours());
    // setTimeout(function(){
    //     document.location.href = "/";
    // },4000)
</script>
<script async src="./assets/js/metrika.js"></script>
</body>
</html>
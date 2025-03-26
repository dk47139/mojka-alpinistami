<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

	<title>404 Страница не найдена</title>

	<!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet"> 


	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->


</head>
<body>
<style>
	* {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	body {
		padding: 0;
		margin: 0;
	}

	#notfound {
		position: relative;
		min-height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.notfound {
        margin-top: 100px;
		max-width: 460px;
		width: 100%;
		text-align: center;
		line-height: 1.4;
	}
	.notfound .notfound-404 h2 {
		font-family: 'Josefin Sans', sans-serif;
		color: #ed6134;
		font-size: 220px;
		margin: 0;
		font-weight: 700;
		line-height: normal;
	}
	.notfound p {
		font-family: 'Josefin Sans', sans-serif;
		color: black;
		font-size: 16px;
		font-weight: 400;
		margin-top: 0;
		margin-bottom: 15px;
	}

	.notfound a {
		font-family: 'Josefin Sans', sans-serif;
		font-size: 14px;
		text-decoration: none;
		text-transform: uppercase;
		background: transparent;
		color: black;
		border: 2px solid black;
		display: inline-block;
		padding: 10px 25px;
		font-weight: 700;
		-webkit-transition: 0.2s all;
		transition: 0.2s all;
	}

	.notfound a:hover {
		color: #ed6134;
		border-color: #ed6134;
	}
	.slide-to-quiz {
		display: none;
	}

	@media only screen and (max-width: 480px) {
		#notfound{
			min-height: 400px;
		}
		.notfound .notfound-404 h2 {
			font-size: 122px;
		}
	}

</style>

	<div id="notfound">
		<div class="notfound">
			<h1>Страница не найдена</h1>
			<div class="notfound-404">
				<h2>404</h2>
			</div>
			<p>К сожалению, но страница, которую вы искали не существует. Попробуйте проверьте правильность написания адреса страницы или вернитесь на главную</p>
			<a href="/">Главная страница</a>
		</div>
	</div>

</body>
</html>

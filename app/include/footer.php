<!-- ФУТЕР -->
<div class='wrapper footer_bg'>
    <div class='footer'>
        <div class='footer_grid'>
            <div class='footer_elem'>
                <aside class='footer_elem_like'>
                    <p>Чтобы не потерять этот сайт, <br> нажмите CTRL + D</p>
                </aside>
            </div>
            <div class='footer_elem footer_elem_contacts_wrapper'>
                <div class='footer_elem_links'>
                    <a target='_blank' href='./Согласие на обработку персональных данных с сайта.docx'>Согласие на обработку персональных данных</a>
                    <a target='_blank' href='./Политика конфиденциальности.docx'>Политика конфиденциальности   </a>
                    <a target='_blank' href='./prav-info.pdf'>Правовая информация</a>
                    <a target='_blank' href='./sitemap.html'>Карта сайта</a>
                </div>
                <div class='footer_elem_links'>
                    <a href='#dostavka-vyezd'>Доставка/Выезд</a>
                    <a href='#rekvizity'>Реквизиты</a>
                    <a href='#garantiya'>Гарантии</a>
                    <a href='#oplata-vozvrat'>Оплата и возврат</a>
                </div>
                <div class='footer_elem_links'>
                    <a href='#vakansii'>Вакансии</a>
                    <a href='#faq'>Вопросы-ответы</a>
                    <a href='#sertifikaty'>Сертификаты</a>
                    <a href='#credit-rassrochka'>Кредит/Рассрочка</a>
                </div>
                <address itemscope='' itemtype='https://schema.org/PostalAddress' class='footer_elem_contacts'>
                    <img src='./assets/images/icons/address.png' alt='Адрес нашего офиса'>
                    <p itemprop='streetAddress'><b>Адрес нашего офиса:</b> <?= ADDRESS ?></p>
                </address>
                <div class='footer_elem_contacts'>
                    <img src='./assets/images/icons/phone-call.png' alt='Телефон офиса'>
                    <p><b>Телефон:</b> <?= PHONE ?></p>
                </div>
                <div class='footer_elem_contacts'>
                    <img src='./assets/images/icons/email.png' alt='Почта офиса'>
                    <p><b>Почта:</b> <?= MAIL ?></p>
                </div>
            </div>
        </div>
        <footer class='footer_prav'>
            <small>
                Предупреждение об ответственности за нарушение авторства материалов сайта <?= SITE_LINK ?> В
                соответствие со статьями 1250, 1252 ГК РФ и с п.1 ст. 1301 ГК РФ в случае нарушения авторства материалов,
                нарушителю грозит штраф от десяти тысяч рублей до пяти миллионов рублей. Дополнительно ч.1 ст.146 УК РФ
                регламентирует ответственность за присвоение авторства (плагиат) с штрафом от 200 тыс. руб. и вплоть до
                ареста до 6 месяцев. Сайт носит информационный характер и не является публичной офертой, определяемой
                положениями ГК РФ.
            </small>
        </footer>
    </div>
</div>
<!-- ФУТЕР КОНЕЦ -->

<!-- ПОПАПЫ-->
<!-- ЗАЯВКА -->
<div id='zayavka' class='popup'>
    <div class='popup__wrapper'>
        <div class='form__wrap'>
            <form class='form my-forms'>
                <input type='hidden' name='Откуда' value='Мы вам перезвоним в течении 10 минут'>
                <p style='margin-bottom: 2rem;' class='title'>Мы вам перезвоним в <span>течении 10 минут</span></p>

                <input class='form__inp' type='text' name='name' placeholder='Ваше имя'>
                <i class='form__subinp'>Мы уважаем своих клиентов и обращаемся по имени</i>

                <input class='form__inp' type='tel' name='phone' placeholder='Ваше имя'>
                <i class='form__subinp'>Позвоним Вам, чтобы уточнить детали. Это ни к чему
                    Вас не обязывает
                </i>
                <button class='btn form__btn'>Жду звонка</button>
                <i class='form__politica politica_js'></i>
            </form>
        </div>
    </div>
</div>

<!-- Выиграл Скидку-->
<div id='skidka' class='popup'>
	<div class='popup__wrapper'>
		<div class='form__wrap'>
			<form class='form my-forms'>
				<input type='hidden' name='Откуда' value='Выиграл скидку 10%'>
				<p style='margin-bottom: 2rem;' class='title'>ВЫ ВЕЗУНЧИК!<br> Ваша скидка 10%</p>

                <input class='form__inp' type='text' name='name' placeholder='Ваше имя'>
				<i class='form__subinp'>Мы уважаем своих клиентов и обращаемся по имени</i>

                <input class='form__inp' type='tel' name='phone' placeholder='Ваше имя'>
				<i class='form__subinp'>Позвоним Вам, чтобы уточнить детали. Это ни к чему
					Вас не обязывает
				</i>
				<button class='btn form__btn'>Забрать скидку</button>
				<i class='form__politica politica_js'></i>
			</form>
		</div>
	</div>
</div>

<!--УВЕДОМЛЕНИЕ О НАЖАТИИ-->
<div class='notification notification_js'>Тут пусто! Ищите дальше!</div>

<!--КОД ЯНДЕКС МЕТРИКИ-->
<!--КОД ГУГЛ МЕТРИКИ-->

<script defer src='/assets/js/main.js'></script>
<script async src='/assets/js/metrika.js'></script>

</body>

</html>














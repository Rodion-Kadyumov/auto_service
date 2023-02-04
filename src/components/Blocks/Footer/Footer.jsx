import '../Footer/Footer.css';

function Footer() {

  return (
    <footer>
      <div className='footer-left'>
        <div className='footer-left__contacts'>
          <p className='footer-left__contacts__mail'>info@example.ru</p>
          <p className='footer-left__contacts__grafic'>Работаем для вас:<br />Ежедневно с 9:00 до 21:00</p>
          <button className='footer-left__contacts__call'>Обратный звонок</button>
          <button className='footer-left__contacts__control'>Контроль качества</button>
        </div>
        <div className='footer-left__network'>
          <img className='footer-left__network__link' src='/images/vk.svg' alt='ВКонтакте' />
          <img className='footer-left__network__link' src='/images/insta.svg' alt='Инстаграмм' />
          <img className='footer-left__network__link' src='/images/twit.svg' alt='Твиттер' />
          <img className='footer-left__network__link' src='/images/youtube.svg' alt='Ютуб' />
        </div>
      </div>
      <div className='footer-right'>
        <nav className='footer-right__about'>
          <p to='/about' className='footer-right__about__link'>О компании</p>
          <p to='/workers' className='footer-right__about__link'>Гарантии</p>
          <p to='/order' className='footer-right__about__link'>Новости</p>
          <p to='/delivery' className='footer-right__about__link'>Акции</p>
          <p to='/contacts' className='footer-right__about__link'>Контакты</p>
          <p className='footer-right__about__lk'>Личный кабинет
            <img className='footer-right__about__link__svg' src='/images/lk.svg' />
          </p>
        </nav>
        <div className='footer-right__services'>
          <div className='footer-right__services__auto'>
            <h4 className='footer-right__services__auto__title'>Автоцентры</h4>
            <div className='footer-right__services__auto__line'></div>
            <p className='footer-right__services__auto__link'>Автосервис VOLVO</p>
            <p className='footer-right__services__auto__link'>Автосервис Land Rover</p>
            <p className='footer-right__services__auto__link'>Автосервис VAG</p>
            <p className='footer-right__services__auto__link'>Автосервис BMW</p>
            <p className='footer-right__services__auto__link'>Автосервис Mercedes</p>
            <p className='footer-right__services__auto__link'>Кузовной ремонт и детейлинг</p>
            <p className='footer-right__services__auto__addres'>Адрес автоцентра:</p>
            <p className='footer-right__services__auto__gps'>
              Екатеринбург, ул. Московский тракт 7 км, 2<br />+7 (999) 123-45-67
            </p>
          </div>
          <div  className='footer-right__services__service'>
            <h4 className='footer-right__services__service__title'>Услуги</h4>
            <div className='footer-right__services__service__line'></div>
            <p className='footer-right__services__service__link'>Ремонт автомобиля</p>
            <p className='footer-right__services__service__link'>Плановое ТО</p>
            <p className='footer-right__services__service__link'>Диагностика</p>
            <p className='footer-right__services__service__link'></p>
            <p className='footer-right__services__service__link'>Кузовной ремонт и детейлинг</p>
            <p className='footer-right__services__service__link'>Чип тюнинг</p>
            <p className='footer-right__services__auto__addres'>Центр кузовного ремонта:</p>
            <p className='footer-right__services__auto__gps'>
              Екатеринбург, ул. Московский тракт 7 км, 2<br />
              +7 (999) 123-45-67
            </p>
          </div>
        </div>
      </div>
      <div className='footer-line'></div>
      <p className='footer-end'>© 2022 Специализированный автоцентр</p>
      <div className='footert'>
        <div className='footert-top'>
          <div className='footert-top__info'>
            <p className='footer-left__contacts__mail'>info@example.ru</p>
            <p className='footer-left__contacts__grafic'>Работаем для вас:<br />Ежедневно с 9:00 до 21:00</p>
          </div>
          <div className='footert-top__btn'>
            <button className='footer-left__contacts__call'>Обратный звонок</button>
            <button className='footer-left__contacts__control'>Контроль качества</button>
          </div>
        </div>
        <div className='footert-about'>
          <div className='footert-about__link'>
            <p to='/about' className='footer-right__about__link'>О компании</p>
            <p to='/workers' className='footer-right__about__link'>Гарантии</p>
            <p to='/order' className='footer-right__about__link'>Новости</p>
            <p to='/delivery' className='footer-right__about__link'>Акции</p>
            <p to='/contacts' className='footer-right__about__link'>Контакты</p>
          </div>
          <div className='footert-about__lk'>
            <p className='footer-right__about__lk'>Личный кабинет
              <img className='footer-right__about__link__svg' src='/images/lk.svg' />
            </p>
          </div>
        </div>
        <div className='footert-dillers'>
          <div className='footert-dillers__auto'>
            <h4 className='footer-right__services__auto__title'>Автоцентры</h4>
            <div className='footer-right__services__auto__line'></div>
            <a href='https://www.volvocars.com/ru' className='footer-right__services__auto__link'>Автосервис VOLVO</a>
            <a href="https://www.landrover.ru" className='footer-right__services__auto__link'>Автосервис Land Rover</a>
            <a href='https://cars.volkswagen.ru/' className='footer-right__services__auto__link'>Автосервис VAG</a>
            <a href="https://www.bmw.ru/ru" className='footer-right__services__auto__link'>Автосервис BMW</a>
            <a href="https://www.mercedes-benz.ru" className='footer-right__services__auto__link'>Автосервис Mercedes</a>
            <p className='footer-right__services__auto__link'>Кузовной ремонт и детейлинг</p>
          </div>
          <div className='footert-dillers__service'>
            <h4 className='footer-right__services__service__title'>Услуги</h4>
            <div className='footer-right__services__service__line'></div>
            <p className='footer-right__services__service__link'>Ремонт автомобиля</p>
            <p className='footer-right__services__service__link'>Плановое ТО</p>
            <p className='footer-right__services__service__link'>Диагностика</p>
            <p className='footer-right__services__service__link'></p>
            <p className='footer-right__services__service__link'>Кузовной ремонт и детейлинг</p>
            <p className='footer-right__services__service__link'>Чип тюнинг</p>
          </div>
        </div>
        <div className='footert-network'>
          <img className='footer-left__network__link' src='/images/vk.svg' alt='ВКонтакте' />
          <img className='footer-left__network__link' src='/images/insta.svg' alt='Инстаграмм' />
          <img className='footer-left__network__link' src='/images/twit.svg' alt='Твиттер' />
          <img className='footer-left__network__link' src='/images/youtube.svg' alt='Ютуб' />
        </div>
        <div className='footert-addres'>
          <div className='footert-addres__auto'>
            <p className='footer-right__services__auto__addres'>Адрес автоцентра:</p>
            <p className='footer-right__services__auto__gps'>
              Екатеринбург, ул. Московский тракт 7 км, 2<br />+7 (999) 123-45-67
            </p>
          </div>
          <div className='footert-addres__repair'>
            <p className='footer-right__services__auto__addres'>Центр кузовного ремонта:</p>
            <p className='footer-right__services__auto__gps'>
              Екатеринбург, ул. Московский тракт 7 км, 2<br />+7 (999) 123-45-67
            </p>
          </div>
        </div>
        <div className='footert-line'></div>
        <p className='footert-end'>© 2022 Специализированный автоцентр</p>
      </div>
    </footer>
  );
}

export default Footer;
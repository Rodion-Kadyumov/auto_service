import "../Burger/Burger.css";


const Burger = ({active, setActive}) => {

  return (
    <div className={active ? 'menu open' : 'menu'} onClick={() => setActive(false)} >
      <div onClick={e => e.stopPropagation()} className="menu-block">
        <div className="menu-block__left">
          <h2 className="menu-block__left__phone">+7 (999) 123-45-67</h2>
          <p className="menu-block__left__mail">info@example.ru</p>
          <p className="menu-block__left__text">Работаем для вас:<br />Ежедневно с 9:00 до 21:00</p>
          <p className="menu-block__left__addres">Адрес автоцентра: </p>
          <p className="menu-block__left__gps">Екатеринбург, ул. Московский тракт 7 км, 2<br />+7 (999) 123-45-67</p>
          <p className="menu-block__left__addres">Центр кузовного ремонта:</p>
          <p className="menu-block__left__gps">Екатеринбург, ул. Московский тракт 7 км, 2<br />+7 (999) 123-45-67</p>
          <div className='menu-block__left__network'>
            <img className='menu-block__left__network__link' src='/images/vkb.svg' alt='ВКонтакте' />
            <img className='menu-block__left__network__link' src='/images/instab.svg' alt='Инстаграмм' />
            <img className='menu-block__left__network__link' src='/images/twitb.svg' alt='Твиттер' />
            <img className='menu-block__left__network__link' src='/images/youtubeb.svg' alt='Ютуб' />
          </div>
        </div>
        <div className="menu-block__right">
          <p className="menu-block__right__title">Автоцентры</p>
          <div className="menu-block__right__line"></div>
          <a href='https://www.volvocars.com/ru' className='menu-block__right__link'>Автосервис VOLVO</a>
          <a href="https://www.landrover.ru" className='menu-block__right__link'>Автосервис Land Rover</a>
          <a href='https://cars.volkswagen.ru/' className='menu-block__right__link'>Автосервис VAG</a>
          <a href="https://www.bmw.ru/ru" className='menu-block__right__link'>Автосервис BMW</a>
          <a href="https://www.mercedes-benz.ru" className='menu-block__right__link'>Автосервис Mercedes</a>
          <p className='menu-block__right__link'>Кузовной ремонт и детейлинг</p>
          <div className="menu-block__right__line"></div>
          <p className="menu-block__right__lk">Личный кабинет</p>
          <p className="menu-block__right__conf">Условия конфиденциальности</p>
        </div>
      </div>
      
    </div>
  );
}

export default Burger;
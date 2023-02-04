import '../Banner/Banner.css';

function Banner() {

  return (
    <main className='banner'>

      <div className='banner-left'>
        <h1 className='banner-left__title'>Специализированный Автосервис</h1>
        <a className='banner-left__phone' href="tel:+79991234567">+7 (999) 123-45-67</a>
        <div className='banner-left__graf'>
          <p className='banner-left__graf__text'><article id='Работаем'>Работаем для вас:</article></p>
          <p className='banner-left__graf__description'>Ежедневно с 9:00 до 21:00</p>
        </div>
        <div className='banner-left__address'>
          <p className='banner-left__graf__text'>По адресу: </p>
          <p className='banner-left__graf__description'>Екатеринбург, ул. Московский тракт 7 км, 2</p>
        </div>
        <button className='banner-btn'>Смотреть услуги<img src='/images/btnVector.svg' /></button>
      </div>
      <div>
        <img className='banner-image__one' src='/images/bannerOne.png' />
        <img className='banner-vleft' src='/images/left.png' />
        <img className='banner-vright' src='/images/right.png' />
      </div>
    </main>
  );
}

export default Banner;
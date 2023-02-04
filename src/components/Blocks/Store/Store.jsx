import '../Store/Store.css';

function Store() {
  return (
    <div className='store'>
      <img className='store-image' src='/images/phone.png' alt='' />
      <div className='store-text'>
        <p className='store-text__title'>Скачивайте наше мобильное приложение</p>
        <p className='store-text__description'>
          <img className='store-text__mark' src='/images/mark.svg' alt='' />записаться на ремонт
        </p>
        <p className='store-text__description'>
          <img className='store-text__mark' src='/images/mark.svg' alt='' />просмотреть историю обслуживания
        </p>
        <p className='store-text__description'>
          <img className='store-text__mark' src='/images/mark.svg' alt='' />получать постоянные акции и бонусы
        </p>
      </div>
      <div className='store-block'>
        <img className='store-block__image' src='/images/app.png' />
        <img className='store-block__image' src='/images/google.png' />
      </div>
    </div>
  );
}

export default Store;
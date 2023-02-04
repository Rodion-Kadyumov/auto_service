import '../Stock/Stock.css';

function Stock() {
  return (
    <div className='stock'>
      <h2 className='stock-title'><article id='Наши'>Наши акции</article></h2>
      <div className='stock-block'>
        <div className='stock-block__left'>
          <img className='stock-block__left__image' src='/images/stock.png' />
        </div>
        <div className='stock-block__right'>
          <p className='stock-block__right__title'>Дарим 1000 бонусов за шиномонтаж и хранение</p>
          <p className='stock-block__right__data'>11 апреля</p>
          <div className='stock-block__right__more'>
            <img className='stock-block__right__more__vector' src='/images/right.png' />
            <p className='stock-block__right__more__detail'>Подробнее</p>
          </div>
          <div>
            <img className='stock-block__right__previosly' src='/images/stockl.png' alt='Предыдущая акция' />
            <img className='stock-block__right__next' src='/images/stockr.png' alt='Следующая акция' />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Stock;
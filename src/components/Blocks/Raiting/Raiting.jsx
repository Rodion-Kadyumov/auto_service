import '../Raiting/Raiting.css';

function Raiting() {

  return (
    <div className='raiting'>
      <div className='raiting-top'>
        <h2 className='raiting-top__title'>Отзывы пользователей об Автоцентре</h2>
        <p className='raiting-top__bal'>4.6</p>
        <p className='raiting-top__middle'>Средняя оценка</p>
      </div>
      <div className='raiting-line'></div>
      <div className='raiting-review'>
        <div className='raiting-review__client'>
          <img className='raiting-review__client__user' src='/images/user.png' alt='' />
          <div>
            <p className='raiting-review__client__name'>butyl1n_i</p>
            <p className='raiting-review__client__data'>
            23 декабря 2020
            </p>
            <img className='raiting-review__client__stars' src='/images/ratings.svg' />
          </div>
          <img className='raiting-review__client__left' src='/images/raitingl.svg' alt='' />
          <img className='raiting-review__client__right' src='/images/raitingr.svg' />
        </div>
          <p className='raiting-review__description'>
            Решил убить сразу несколько зайцев, и пока гуляли с женой по меге оставил свою Volvo на диагностику в данном центре. Знаю что меняли ранее в другом центре, и что уже нужно было поменять. В этом центре лишнего не насчитали, проблемы нашли. В следующий раз приеду уже за полным ТО.
          </p>
      </div>
      <div className='raiting-addres'>
        <div>
          <img className='raiting-addres__image' src='/images/bannerOne.png' />
          <div className='raiting-addres__gps'>
            <p className='raiting-addres__gps__title'>Екатеринбург, Московский тракт 7 км, 2<br />Телефон: +7 (999) 123-45-67</p>
            <p className='raiting-addres__gps__title'>Cервис:
              <span>service@example.ru</span><br />Отдел запасных частей:
              <span>parts@example.ru</span>
            </p>
            <button className='raiting-addres__gps__btn'>Построить маршрут</button>
          </div>
        </div>
        <img className='raiting-card' src='/images/card.png' alt='' />
      </div>
    </div>
  );
}

export default Raiting;
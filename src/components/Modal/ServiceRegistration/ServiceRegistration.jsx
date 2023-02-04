import React from 'react';
import '../ServiceRegistration/ServiceRegistration.css';

const ServiceRegistration = ({active, setActive}) => {

  return (
    <form className={active ? 'registration open' : 'registration'} onClick={() => setActive(false)}>
      <div className="registration-body" onClick={e => e.stopPropagation()}>
        <button onClick={() => setActive(false)} className='registration-close'>X</button>
        <h2 className='registration-title'>Запись на сервис</h2>
        <div className="registration-content">
          <input className='registration-content__name' type="text" value={'Ваше имя'} />
          <input className='registration-content__phone' type="text" value={'Контактный телефон'} />
          <input className='registration-content__commit' type="text" value={'Марка автомобиля'} />
          <input className='registration-content__commit' type="text" value={'Комментарий'} />
        </div>
        <div className="registration-footer">
          <p className="registration-footer__text">Нажимая кнопку «Отправить заявку» вы даете согласие на <a className='registration-footer__link'>Обработку персональных данных</a></p>
          <button className="registration-footer__btn">Отправить заявку
            <img className="callback-footer__btn__img" src='/images/modalVector.svg' />
          </button>
        </div>
      </div>
    </form>
  );
}

export default ServiceRegistration;
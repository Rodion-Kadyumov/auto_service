import React from 'react';
import '../Feedback/Feedback.css';

const Feedback = ({active, setActive}) => {

  return (
    <form className={active ? 'callback open' : 'callback'} onClick={() => setActive(false)}>
      <div className="callback-body" onClick={e => e.stopPropagation()}>
        <button onClick={() => setActive(false)} className='callback-close'>X</button>
        <h2 className='callback-title'>Перезвоним в течении часа</h2>
        <div className="callback-content">
          <input className='callback-content__name' type="text" value={'Ваше имя'} />
          <input className='callback-content__phone' type="text" value={'Контактный телефон'} />
          <input className='callback-content__commit' type="text" value={'Комментарий'} />
        </div>
        <div className="callback-footer">
          <p className="callback-footer__text">
            Нажимая кнопку «Отправить заявку» вы даете согласие на Обработку персональных данных
          </p>
          <button className="callback-footer__btn">Отправить заявку
            <img className="callback-footer__btn__img" src='/images/modalVector.svg' />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Feedback;
import { useNavigate } from 'react-router-dom'
import '../Contacts/Contacts.css';

function Contacts() {
  const navigation = useNavigate();
  const back = () => navigation(-1);

  return (
    <div className='contacts'>
      <h1 className='contacts-title'>Автосервис</h1>
      <img onClick={back} className='contacts-back__image' src="/images/left.png" alt="" />
      <p className='contacts-back'>На главную</p>
      <div className="contacts-block">
        <div className="contacts-blocks__left">
          <p className="contacts-blocks__left__addres">
            <img className='contacts-blocks__left__icon' src='/images/location.png' />
            Адрес автоцентра:<br />Екатеринбург, ул. Московский тракт 7 км, 2
          </p>
          <p className="contacts-blocks__left__phone">
            <img className='contacts-blocks__left__icon' src='/images/phonen.png' />
            Телефон<br />+7 (999) 123-45-67
          </p>
          <p className="contacts-blocks__left__mail">
            <img className='contacts-blocks__left__icon' src='/images/mailn.png' />
            E-mail<br />info@example.ru
          </p>
          <p className="contacts-blocks__left__graffik">
            <img className='contacts-blocks__left__icon' src='/images/clock.png' />
            Работаем для вас:<br />Ежедневно с 9:00 до 21:00
          </p>
        </div>
        <div className="contacts-block__right">
          <img src="/images/card.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
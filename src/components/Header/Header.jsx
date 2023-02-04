import { Routes, Route, Link } from 'react-router-dom';
import Main from '../../Pages/Main/Main';
import Contacts from '../../Pages/Contacts/Contacts';
import Feedback from '../Modal/Feedback/Feedback';
import Burger from '../Burger/Burger';
import { useState } from 'react';
import '../Header/Header.css';

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header>
      <img className='header-image' src='/images/logo.svg' />
        <p to='/' className='link-serv'>Услуги</p>
        <div class="dropdown">
          <button class="dropdown-btn"></button>
          <div class="dropdown-content">
            <a href="#">Ремонт автомобиля</a>
            <a href="#">Плановое ТО</a>
            <a href="#">Диагностика и ремонт</a>
            <a href="#">Чип тюнинг</a>
          </div>
        </div>
        <nav className='header-nav'>
          <a href='#Работаем' className='link'>О компании</a>
          <a href='#Обратившись' className='link'>Гарантии</a>
          <a href='' className='link'>Новости</a>
          <a href='#Наши' className='link'>Акции</a>
          <Link to='/contacts' className='link'>Контакты</Link>
        </nav>
        <div className='header-line'></div>
        <div onClick={() => setMenuActive(!menuActive)} className='burger'>
          <div className='menu-icon'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <button onClick={() => setModalActive(true)} className='header-btn'>Запись на сервис</button>
        <Feedback active={modalActive} setActive={setModalActive} />
        <Burger active={menuActive} setActive={setMenuActive} />
    </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/feed' element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default Header;
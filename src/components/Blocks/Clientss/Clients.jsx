import '../Clientss/Clients.css';

function Clients() {

  return (
    <div className='clients'>
      <h6 className='clients-title'>Обслуживаем и ремонтируем</h6>
      <div className='test'>
        <a href='https://www.volvocars.com/ru'>
          <img className='clients-logo' src='/images/volvo.png' />
        </a>
        <a href="https://www.landrover.ru">
          <img className='clients-logo' src='/images/landrover.png' />
        </a>
        <a href="https://www.mercedes-benz.ru">
          <img className='clients-logo' src='/images/mercedec.png' />
        </a>
        <a href="https://www.bmw.ru/ru">
          <img className='clients-logo' src='/images/bmv.png' />
        </a>
        <a href="https://www.porsche.com">
          <img className='clients-logo' src='/images/porshe.png' />
        </a>
        <a href="https://www.audi.com">
          <img className='clients-logo' src='/images/audi.png' />
        </a>      
      </div>
    </div>
  );
}

export default Clients;
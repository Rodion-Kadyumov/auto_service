import ServiceRegistration from '../../Modal/ServiceRegistration/ServiceRegistration';
import { useState } from 'react';
import '../Order/Order.css';

function Order() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='order'>
      <div className='order-line'></div>
      <h6 className='order-title'>Получить консультацию</h6>
      <p className='order-text'>
        Оставьте заявку, и наш мастер перезвонит вам, произведет предварительную оценку стоимости услуг и запчастей, и подберет удобное время для визита.
      </p>
      <button onClick={() => setModalActive(true)} className='order-btn'>Оставить заявку</button>
      <ServiceRegistration active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default Order;
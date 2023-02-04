
import CardServices from '../../../components/Cards/CardServices';
import { services } from '../../../mocData/content';
import '../Servicess/Services.css';

function Services() {

  return (
  <div className='services'>
    <h2 className='services-title'>Услуги автосервиса</h2>
    <div className='services-cards'>
      {services.map((services) => {
        const { id, url, title, num, svg } = services;
        return (
          <CardServices
          key={id}
          id={id}
          url={url}
          title={title}
          num={num}
          svg={svg}
          />
        );
      })}
    </div>
  </div>
  );
  
}

export default Services;
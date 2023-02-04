import '../About/About.css';

function About() {

  return (
  <div className='about'>
    <div className='about-line'></div>
    <h6 className='about-title'>Главное преимущество компании</h6>
    <div className='about-block'>
      <p className='about-block__text'>Работаем с 2012 года</p>
      <p className='about-block__description'>
        Вашим автомобилем будут заниматься люди с большим опытом, полученным за многие годы и прошедшие множество обучений.<br />
        Сотрудники обладают огромным багажом знаний, применяемых на практике.
      </p>
    </div>
  </div>
  );
}

export default About;
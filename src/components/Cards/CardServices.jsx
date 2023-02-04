import '../Cards/CardServices.css';

function CardServices({url, title, num, svg}) {
  
  return (
    <div className='services-card'>
      <img className='services-card__image' src={url} alt={title} />
      <div className='services-card__bottom'>
        <div>
          <p className='services-card__bottom__title'>{title}</p>
          <p className='services-card__bottom__num'>{num}</p>
        </div>
        <img className='services-card__bottom__more' src={svg} alt='Подробнее' />
      </div>
    </div>
  )
}

export default CardServices;
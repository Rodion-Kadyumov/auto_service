import '../Cards/CardGuarant.css';

function CardGuarant({url, title}) {
  
  return (
    <div className='guarant-card'>
      <img className='guarant-card__image' src={url} alt={title} />
      <p className='guarant-card__title'>{title}</p>
    </div>
  );
}

export default CardGuarant;
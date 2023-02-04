import CardGuarant from '../../../components/Cards/CardGuarant';
import { guarant } from '../../../mocData/content';
import '../Guarant/Guarantion.css';

function Guarantion() {

  return (
    <div className='guaranties'>
      <div className='guaranties-left'>
        <h2 className='guaranties-left__title'>
          <article id='Обратившись'>
          Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках специалистов послегарантийного ремонта и технического обслуживания автомобилей.
          </article>
        </h2>
        <p className='guaranties-left__text'>
          Чтобы автомобиль всегда оставался в отличной форме, необходимо выполнять регулярное ТО по программе рекомендованной производителем.
        </p>
        <p className='guaranties-left__text'>
          Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ
        </p>
      </div>
      <div className='guaranties-right'>
        <div className='guaranties-right__cards'>
          {guarant.map((guarant) => {
            const { id, url, title } = guarant;
            return (
              <CardGuarant
              key={id}
              id={id}
              url={url}
              title={title}
              />
            )
          })}            
        </div>
      </div>
    </div>
  );
}

export default Guarantion;
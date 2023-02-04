import Banner from '../../components/Blocks/Banner/Banner';
import About from '../../components/Blocks/About/About';
import Service from '../../components/Blocks/Servicess/Services';
import Guarantion from '../../components/Blocks/Guarant/Guarantion';
import Clients from '../../components/Blocks/Clientss/Clients';
import Stock from '../../components/Blocks/Stock/Stock';
import Raiting from '../../components/Blocks/Raiting/Raiting';
import Order from '../../components/Blocks/Order/Order';
import Store from '../../components/Blocks/Store/Store';
import '../Main/Main.css';

function Main() {
  
  return (
    <div className='container'>
      <Banner />
      <About />
      <Service />
      <Guarantion />
      <Clients />
      <Stock />
      <Raiting />
      <div className='white'></div>
      <Order />
      <Store />
    </div>
  );
}

export default Main;
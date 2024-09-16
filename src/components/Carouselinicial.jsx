
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import imagen1 from '../assets/pexels-aratuc-nash-802127.webp'
import imagen2 from '../assets/pexels-inspiredimages-133400.webp'
import imagen3 from '../assets/pexels-mccutcheon-1191710.webp'

const Carouselinicial = () => {
    return (
        <>
        <section>

            <Carousel className='border border-2 border-bottom border-dark'>
      <Carousel.Item>
        <img className='w-100 alturacarousel' src={imagen1} alt="" />
        <Carousel.Caption>
          <h3>Pinta con los colores de tus sueños</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 alturacarousel' src={imagen2} alt="paletas soñadas" />
        <Carousel.Caption>
          <h3>Un mundo alegre, es un mundo con color armonico</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 alturacarousel' src={imagen3} alt="Flor de color en mundo gris" />
        <Carousel.Caption>
          <h3>Los colores de la vida</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
        </>
    );
};

export default Carouselinicial;
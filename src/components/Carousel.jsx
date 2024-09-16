import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carousel = () => {
    return (
        <section>
            <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNtcPIvgNMB8tVyxfPP0T5mjyTbcFsGV0OA&s" text="Primer slide" />
        <Carousel.Caption>
          <h3>Pinta con los colores de tus sueños</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Segundo slide" />
        <Carousel.Caption>
          <h3>Un mundo alegre, es un mundo con color armonico</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Tercer slide" />
        <Carousel.Caption>
          <h3>Los colores de la vida</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default Carousel;
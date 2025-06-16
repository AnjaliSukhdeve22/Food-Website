import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/image3.png'
import img2 from '../assets/image2.png'
import img1 from '../assets/image1.png'
import '../style/Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  return (
    <Carousel data-bs-theme="dark"
    swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
           
    >
<Carousel.Item>
  <img
    className="d-block w-100"
    src={img}
    alt="First slide"
  />
  <Carousel.Caption className="carousel-center-caption">
    <h2>Take a seat, grab a treat.
</h2>
    <button onClick={() => navigate('/online-order')} className="carousel-button">Online Order</button>
        <button className="carousel-button" onClick={()=>navigate('/Reservation-Form')}>Make Reservation</button>

  </Carousel.Caption>
</Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-center-caption">
            <h2>Tasty food for every mood.
</h2>
    <button onClick={() => navigate('/online-order')} className="carousel-button">Online Order</button>

        <button className="carousel-button" onClick={()=>navigate('/Reservation-Form')}>Make Reservation</button>

  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-center-caption">
            <h2>Come for firsts,stay for seconds.
</h2>
    <button onClick={() => navigate('/online-order')} className="carousel-button">Online Order</button>
        <button className="carousel-button" onClick={()=>navigate('/Reservation-Form')}>Make Reservation</button>
  </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/dropOso.png'
import img2 from '../../assets/bannerDoopel.png'
import img3 from '../../assets/bannerPolice.png'
import Styles from './carusel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function Carusel() {


    

    return (
        <div className={Styles.caruselMargin}>

            <Carousel fade>
                <Carousel.Item>
                    <img className={`d-block w-100 ${Styles.sliderImage}`}src={img2} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={`d-block w-100 ${Styles.sliderImage}`} src={img1} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={`d-block w-100 ${Styles.sliderImage}`} src={img3} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carusel;
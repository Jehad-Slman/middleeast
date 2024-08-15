import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide3.jpg"

import classes from "./home.module.css"
const Home = props => {
    return(
        <section className={classes.home}>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage  /> */}
                    <img src={slide1}/>
                    <Carousel.Caption>
                    <h3>Welcome to The MiddleFeast !</h3>
                    <p>Experience the magic of Middle Eastern cuisine with us. From corporate events to intimate gatherings, we're here to make every moment memorable. Join us on a culinary journey filled with tradition, innovation, and unforgettable flavors. Welcome, and let the feast begin!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={slide2}/>
                    <Carousel.Caption>
                    <h3>MEZZE!</h3>
                    <p>At the heart of this culinary tradition lies the concept of "mezze"—small plates bursting with flavour, designed to tantalise the taste buds and ignite conversation. From creamy hummus drizzled with olive oil to tangy tabbouleh bursting with fresh herbs, each dish tells a story of generations past, a tribute to the rich tapestry of Middle Eastern cuisine.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={slide3}/>
                    <Carousel.Caption>
                    <h3>Our Mission</h3>
                    <p>
                    Our mission is to celebrate the heritage of Middle Eastern cuisine by delivering exceptional dining experiences that honour tradition, inspire exploration, and bring people together through the art of food.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home;
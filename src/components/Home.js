import Carousel from 'react-bootstrap/Carousel';
import image from "../images/test.jpg"

import classes from "./home.module.css"
const Home = props => {
    return(
        <section className={classes.home}>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage  /> */}
                    <img src={image}/>
                    <Carousel.Caption>
                    <h3>Welcome to The MiddleFeast !</h3>
                    <p>Experience the magic of Middle Eastern cuisine with us. From corporate events to intimate gatherings, we're here to make every moment memorable. Join us on a culinary journey filled with tradition, innovation, and unforgettable flavors. Welcome, and let the feast begin!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={image}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={image}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home;
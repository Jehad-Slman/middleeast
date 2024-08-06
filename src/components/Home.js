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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
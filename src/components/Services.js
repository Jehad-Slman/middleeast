import ServicesCard from "./ServicesCard";
import service1 from "../images/service1.jpeg"
import service2 from "../images/service2.jpeg"
import service3 from "../images/service3.jpeg"
import service4 from "../images/service4.jpeg"

import classes from "./services.module.css"

const Services = props => {
    return(
        <section className={classes.services} id="services">
            <h2>Services</h2>
            <main>
                <ServicesCard image={service1} title="Home Party Platters" description="Enjoy a hassle-free celebration with our home party service. We'll deliver a delicious spread of Mazza dishes, one main course, and a delectable dessert right to your door. Perfect for house parties with a minimum of 6 guests."/>
                <ServicesCard image={service2} title="Event Buffets" description="Perfect for graduations, small gatherings, or intimate weddings. We deliver a ready-to-serve buffet with cold and hot dishes, single-use plates, and desserts for later enjoyment. Guests handle their own service. Minimum 10 guests."/>
                <ServicesCard image={service3} title="Corporate Finger Food" description="Elevate your corporate events with our gourmet finger food platters. We deliver an assortment of Mazza for self-service, ensuring a seamless and sophisticated experience without the need for main dishes or desserts. Ideal for gatherings of 10 or more."/>
                <ServicesCard image={service4} title="Private Dining Experiences" description="Indulge in a personalised dining experience for small groups (minimum 6 guests). Our tailored menu, designed to suit your tastes, includes exquisite Mazza, a sumptuous main course, and a delectable dessert, all served in the comfort of your chosen venue."/>
            </main>
        </section>
    )
}

export default Services;
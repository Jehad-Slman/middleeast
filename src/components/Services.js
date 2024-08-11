import ServicesCard from "./ServicesCard";

import classes from "./services.module.css"

const Services = props => {
    return(
        <section className={classes.services} id="services">
            <h2>Services</h2>
            <main>
                <ServicesCard title="Home Party Platters" description="Enjoy a hassle-free celebration with our home party service. We'll deliver a delicious spread of Mazza dishes, one main course, and a delectable dessert right to your door. Perfect for house parties with a minimum of 6 guests."/>
                <ServicesCard title="Event Buffets" description="Perfect for graduations, small gatherings, or intimate weddings. We deliver a ready-to-serve buffet with cold and hot dishes, single-use plates, and desserts for later enjoyment. Guests handle their own service. Minimum 10 guests."/>
                <ServicesCard title="Corporate Finger Food" description="Elevate your corporate events with our gourmet finger food platters. We deliver an assortment of Mazza for self-service, ensuring a seamless and sophisticated experience without the need for main dishes or desserts. Ideal for gatherings of 10 or more."/>
                <ServicesCard title="Private Dining Experiences" description="Indulge in a personalised dining experience for small groups (minimum 6 guests). Our tailored menu, designed to suit your tastes, includes exquisite Mazza, a sumptuous main course, and a delectable dessert, all served in the comfort of your chosen venue."/>
            </main>
        </section>
    )
}

export default Services;
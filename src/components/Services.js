import ServicesCard from "./ServicesCard";

import classes from "./services.module.css"

const Services = props => {
    return(
        <section className={classes.services} id="services">
            <h2>Services</h2>
            <main>
                <ServicesCard title="service" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <ServicesCard title="service" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <ServicesCard title="service" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <ServicesCard title="service" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </main>
        </section>
    )
}

export default Services;
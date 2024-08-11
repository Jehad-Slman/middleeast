import Button from 'react-bootstrap/Button';    
import Card from 'react-bootstrap/Card';

import classes from "./servicesCard.module.css"
import { useState } from 'react';
import Bookpopup from './Bookpopup';

const ServicesCard = props => {

    const [showPopup, setShowPopup] = useState(false);
    const [serviceType, setServiceType] = useState(null)

    const book = type => {
        setServiceType(type)
        setShowPopup(true)
    }

    return(
        <>
        {showPopup && <Bookpopup hide={() => setShowPopup(false)} type={serviceType}/>}
        <section className={classes.service_card}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://placehold.co/100x80" />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <footer className={classes.card_footer}>
                    <Button variant="primary" onClick={() => book(props.title)}>Book</Button>
                </footer>
                </Card.Body>
            </Card>
        </section>
        </>
    )
}

export default ServicesCard;
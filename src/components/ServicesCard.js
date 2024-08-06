import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import classes from "./servicesCard.module.css"

const ServicesCard = props => {
    return(
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://placehold.co/100x80" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <footer className={classes.card_footer}>
                <Button variant="primary">Details</Button>
                <Button variant="primary">Book</Button>
            </footer>
            </Card.Body>
        </Card>
    )
}

export default ServicesCard;
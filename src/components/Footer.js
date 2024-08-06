import Button from 'react-bootstrap/Button';

import classes from "./footer.module.css"

const Footer = props => {
    return(
        <footer className={classes.footer} id="contact">
            <h2>Contact Us</h2>
            <form>
                <section>
                    <div>
                        <label>Full Name</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                </section>
                <label>Description</label>
                <textarea/>
                <Button variant="primary">Submit</Button>
            </form>
        </footer>
    )
}

export default Footer;
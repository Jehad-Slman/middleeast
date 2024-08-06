import Nav from 'react-bootstrap/Nav';
import classes from "./header.module.css"

const Header = props => {
    return(
        <header className={classes.main_header}>
            <Nav
                activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="#services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Header;
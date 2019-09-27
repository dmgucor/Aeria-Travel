import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles/Navbar.css";
import Logo from "./img/spinner-of-dots.svg";

export class Navigation extends React.Component {
    render() {
        return (<Navbar id="navbar" >
            <Navbar.Brand >
                <img src={Logo}
                    alt="logo"
                    id="nav-logo"
                    width="40" />
            </Navbar.Brand>
            <Nav className="mr-auto" >
                <Nav.Link href="#home" > Home </Nav.Link> 
                <Nav.Link href="#trips" > About us </Nav.Link>
                <Nav.Link href="#destinations" > Destinations </Nav.Link>
            </Nav >
        </Navbar>);
    }
}
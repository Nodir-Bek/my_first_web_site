import React, { Component } from "react";
import {
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import logo from "./Codemy_logo.png";
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import Contact from '../Pages/Contacts';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnselect fixed='top' expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                style={{ borderRadius: "50%" }}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              <span className='ml-3'>Codemy.Uz</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About US</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contacts' component={Contact} />
                <Route exact path='/blog' component={Blog} />
            </Switch>
        </Router>
      </>
    );
  }
}

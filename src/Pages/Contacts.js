import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <Container style={{width:'500px'}} className='mt-5'>
          <h1>Biz bilan bog'lanish</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Example text area</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="check out me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
             </Button>
          </Form>
        </Container>
      </>
    );
  }
}

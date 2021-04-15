import React, { Component } from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import firstImg from "../assets/DevTeam.jpeg";
import secondImg from "../assets/DevTeam2.jpg";
import thirdImg from "../assets/DevTeam3.jpg";
import fourthImg from "../assets/DevTeam4.jpeg";
import fifthImg from "../assets/DevTeam5.jpg";
import sixthImg from "../assets/DevTeam6.jpg";


export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h1 className="text-center mt-3">Our team</h1>
          <CardDeck className='m-2'>
            <Card>
              <Card.Img variant="top" style={{height:"222px"}} src={firstImg} />
              <Card.Body>
                <Card.Title>Codemy 2-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 2-group</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={secondImg} />
              <Card.Body>
                <Card.Title>Codemy 5-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 5-group</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={thirdImg} />
              <Card.Body>
                <Card.Title>Codemy 7-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 7-group</Button>
              </Card.Body>
            </Card>           
          </CardDeck>
          <CardDeck className='m-2'>
          <Card>
              <Card.Img variant="top" src={fourthImg} />
              <Card.Body>
                <Card.Title>Codemy 8-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 8-group</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" style={{height:"222px"}} src={fifthImg} />
              <Card.Body>
                <Card.Title>Codemy 9-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 9-group</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={sixthImg} />
              <Card.Body>
                <Card.Title>Codemy 10-group</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore illo iste maiores dolores, accusamus autem?
                </Card.Text>
                <Button variant="primary">about 10-group</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

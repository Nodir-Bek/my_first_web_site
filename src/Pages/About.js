import { Tab } from "react-bootstrap";
import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import teamImg from '../assets/team.jpg';
import coursesImg from '../assets/courses.jpeg';
import designImg from '../assets/design.jpg';
import frameworkImg from '../assets/frameworks.png';
import libraysImg from '../assets/librays.jpg';

export default class About extends Component {
  render() {
    return (
      <>
        <Container className='m-5'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column ml-2 mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Courses</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Librays</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content className='mt-3'>
                  <Tab.Pane eventKey="first">
                    <img src={designImg}  className='img-thumbnail w-100 border'  alt="design" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure numquam quo aliquam atque, velit eum aut obcaecati
                      ipsum quidem, maxime nisi repudiandae doloremque placeat
                      reprehenderit aperiam. Quod sunt porro enim? Velit
                      deleniti molestias quisquam ea libero. Iure unde at
                      maiores optio fuga sapiente blanditiis, libero dolorem,
                      tenetur nihil accusantium voluptatem mollitia. Vitae rem
                      dolorem optio eaque at maiores? Nostrum, earum! Officiis
                      atque hic eum non nisi voluptatem nemo, blanditiis, minima
                      vitae,
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img src={teamImg} className='img-thumbnail w-100 border'  alt="team" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure numquam quo aliquam atque, velit eum aut obcaecati
                      ipsum quidem, maxime nisi repudiandae doloremque placeat
                      reprehenderit aperiam. Quod sunt porro enim? Velit
                      deleniti molestias quisquam ea libero. Iure unde at
                      maiores optio fuga sapiente blanditiis, libero dolorem,
                      tenetur nihil accusantium voluptatem mollitia. Vitae rem
                      dolorem optio eaque at maiores? Nostrum, earum! Officiis
                      atque hic eum non nisi voluptatem nemo, blanditiis, minima
                      vitae,
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img src={coursesImg}  className='img-thumbnail w-100 border' alt="courses" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure numquam quo aliquam atque, velit eum aut obcaecati
                      ipsum quidem, maxime nisi repudiandae doloremque placeat
                      reprehenderit aperiam. Quod sunt porro enim? Velit
                      deleniti molestias quisquam ea libero. Iure unde at
                      maiores optio fuga sapiente blanditiis, libero dolorem,
                      tenetur nihil accusantium voluptatem mollitia. Vitae rem
                      dolorem optio eaque at maiores? Nostrum, earum! Officiis
                      atque hic eum non nisi voluptatem nemo, blanditiis, minima
                      vitae,
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img src={frameworkImg}  className='img-thumbnail w-100 border' alt="fourth" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure numquam quo aliquam atque, velit eum aut obcaecati
                      ipsum quidem, maxime nisi repudiandae doloremque placeat
                      reprehenderit aperiam. Quod sunt porro enim? Velit
                      deleniti molestias quisquam ea libero. Iure unde at
                      maiores optio fuga sapiente blanditiis, libero dolorem,
                      tenetur nihil accusantium voluptatem mollitia. Vitae rem
                      dolorem optio eaque at maiores? Nostrum, earum! Officiis
                      atque hic eum non nisi voluptatem nemo, blanditiis, minima
                      vitae,
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <img src={libraysImg}  className='img-thumbnail w-100 border' alt="fifth" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure numquam quo aliquam atque, velit eum aut obcaecati
                      ipsum quidem, maxime nisi repudiandae doloremque placeat
                      reprehenderit aperiam. Quod sunt porro enim? Velit
                      deleniti molestias quisquam ea libero. Iure unde at
                      maiores optio fuga sapiente blanditiis, libero dolorem,
                      tenetur nihil accusantium voluptatem mollitia. Vitae rem
                      dolorem optio eaque at maiores? Nostrum, earum! Officiis
                      atque hic eum non nisi voluptatem nemo, blanditiis, minima
                      vitae,
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </>
    );
  }
}

import React, { Component } from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../assets/1.jpg";
import secondImg from "../assets/2.jpg";
import thirtyImg from "../assets/3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel className='mt-5'>
        <Carousel.Item>
          <img className="d-block w-100" src={firstImg} alt="" />
          <Carousel.Caption>
            <h3 className="text-success">Codemy.Uz</h3>
            <p className="text-truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, dolores?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondImg} alt="" />
          <Carousel.Caption>
            <h3 className="text-success">Codemy.Uz</h3>
            <p className="text-truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, dolores?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirtyImg} alt="" />
          <Carousel.Caption>
            <h3 className="text-success">Codemy.Uz</h3>
            <p className="text-truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, dolores?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

import React, { Component } from "react";
import Slider from "./slider";
import ProductContext from "../../context/productContext/productContext";
import RenderedPage from "../RenderedPage";
import RenderedPageWithoutTextNodes from "../RenderedPageWithoutTextNodes";
import "../../App.css";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }



  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h2> {this.props.returnedProject ? this.props.returnedProject.name : "Alege un proiect inainte de a continua sa adaugi layouturi"}</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          {this.props.carouselSlides.map((prod) => {
            prod.layoutHeight = 400;
            prod.layoutWidth = 400;
            return <RenderedPage key={prod.id} layoutSpecs={{ ...prod }} />
          })}
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.carouselSlides.map((prod) => {
            prod.layoutHeight = 100;
            prod.layoutWidth = 100;
            return <RenderedPageWithoutTextNodes key={prod.id} layoutSpecs={{ ...prod }} />
          })}
        </Slider>
      </div>
    );
  }
}

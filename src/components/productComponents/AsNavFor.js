import React, { Component } from "react";
import Slider from "./slider";
import ProductContext from "../../context/productContext/productContext";
import RenderedPageForProducts from "./RenderedPageForProducts";
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

    let currentSlide = 0;

    return (
      <div style={{ background: "rgb(240, 240, 240)", padding: "20px" }}>
        <h2> {this.context.returnedProduct ? this.context.returnedProduct.name : "Alege un proiect inainte de a continua sa adaugi layouturi"}</h2>
        <h4>Preview pagina</h4>
        <Slider
          asNavFor={this.state.nav2}
          slidesToShow={2}
          slidesToScroll={2}
          ref={slider => (this.slider1 = slider)}
        >
          {
            this.props.carouselSlides.map((prod) => {
              prod.layoutHeight = 400;
              prod.layoutWidth = 400;
              return <RenderedPageForProducts key={prod.id} layoutSpecs={{ ...prod }} />
            })
          }
        </Slider>
        <h4>Thumbnailuri </h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={2}
          slidesToScroll={2}
          swipeToSlide={true}
          focusOnSelect={false}
        >
          {this.props.carouselSlides.map((prod) => {
            prod.layoutHeight = 150;
            prod.layoutWidth = 150;

            currentSlide += 1;
            return <RenderedPageWithoutTextNodes
              key={prod.id}
              layoutSpecs={{ ...prod }}
              carouselLength={this.props.carouselSlides.length}
              currentSlide={currentSlide} />
          })}

        </Slider>
      </div>
    );
  }
}
AsNavFor.contextType = ProductContext;
import React, { Component } from "react";
import Slider from "./slider";
import ProductContext from "../../context/productContext/productContext";
import RenderedPageForProducts from "./RenderedPageForProducts";
import RenderedSecondaryPageForProducts from "./RenderedSecondaryPageForProducts";
import RenderedCover from "../../components/RenderedCover";
import defaultImage from "../../assets/logo.svg";
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
    const backgroundImageConfig = {
      backgroundImage: "url(" + `${this.props.recursiveBackground}` + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }

    return (
      <div style={{ background: "rgb(240, 240, 240)", padding: "20px" }}>
        <h2> {this.context.returnedProduct ? this.context.returnedProduct.name : "Alege un proiect inainte de a continua sa adaugi layouturi"}</h2>
        <h4>Preview pagina</h4>
        <div id="kaka" >
          <Slider
            asNavFor={this.state.nav2}
            slidesToShow={1}
            slidesToScroll={1}
            ref={slider => (this.slider1 = slider)}
          >

            {
              this.props.carouselSlides.map((prod) => {
                prod.layoutHeight = 450;
                prod.layoutWidth = 400;
                return <div>

                  {prod.tipLayout !== "Pagina" && <RenderedCover key={prod.id} layoutSpecs={{ ...prod }} />}

                  {prod.tipLayout === "Pagina" && <div

                    style={{
                      backgroundImage: `url(${prod.opening === true ? (prod.background ? prod.background : this.props.recursiveBackground) : null})`, backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}>
                    <RenderedPageForProducts
                      key={prod.id} layoutSpecs={{ ...prod }}
                      width={prod.opening === true ? "50%" : "inherit"}
                      display={prod.opening === true ? "inline-block" : "block"}
                      background={prod.opening ? null : prod.background}
                      recurentBackground={prod.opening ? null : this.props.recursiveBackground} />
                    {prod.opening &&
                      <RenderedSecondaryPageForProducts
                        key={prod.id}
                        layoutSpecs={{ ...prod }} />}
                  </div>}
                </div>
              })
            }

          </Slider>
        </div>
        <h4>Thumbnailuri </h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={2}
          slidesToScroll={2}
          swipeToSlide={true}
          focusOnSelect={false}
        >
          {this.props.carouselSlides.map((prodNav) => {
            // prodNav.layoutHeight = 150;
            // prodNav.layoutWidth = 150;

            currentSlide += 1;
            return <div>

              <img src={prodNav.backgroundLayout ? prodNav.backgroundLayout : defaultImage} style={{ height: "120px", width: "auto", margin: "0 auto" }} />
              <p style={{ textAlign: "center" }}>{`${currentSlide} / ${this.props.carouselSlides.length}`}</p>
            </div>
          })}

        </Slider>
      </div>
    );
  }
}
AsNavFor.contextType = ProductContext;
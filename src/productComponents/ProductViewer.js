import React, { useEffect, useState, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RenderedPage from "../components/RenderedPage";
import RenderedCover from "../components/RenderedCover";
import { render } from "@testing-library/react";
import ProductContext from "../context/productContext/productContext";

const ProductViewer = () => {
  const productsContext = useContext(ProductContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { slider } = productsContext;

  return (
    <div>

      <Slider {...settings}>

        {slider.map((prod) => (
          <RenderedPage layoutSpecs={{ ...prod }} />
        ))}


        {/* <RenderedCover
          tipLayout={prod.tipLayout}
          layoutWidth={prod.layoutWidth}
          layoutHeight={prod.layoutHeight}
          coverHasImage={prod.coverHasImage}
          coverImageWidth={prod.coverImageWidth}
          coverImageHeight={prod.coverImageHeight}
          coverImageTopPosition={prod.coverImageTopPosition}
          coverImageLeftPosition={prod.coverImageLeftPosition}
          zoom={prod.zoom}
        /> */}
      </Slider>
    </div>
  );
};

export default ProductViewer;

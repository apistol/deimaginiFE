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
          <RenderedPage
          key={prod.id}
          tipLayout={prod.tipLayout}
          rowsLayout={prod.rowsLayout}
          layoutPadding={prod.layoutPadding}
          layoutWidth={prod.layoutWidth}
          layoutHeight={prod.layoutHeight}
          row1={prod.row1}
          row1Col1={prod.row1Col1}
          row1Col2={prod.row1Col2}
          row1Col3={prod.row1Col3}
          row1Col4={prod.row1Col4}
          row2={prod.row2}
          row2Col1={prod.row2Col1}
          row2Col2={prod.row2Col2}
          row2Col3={prod.row2Col3}
          row2Col4={prod.row2Col4}
          row3={prod.row3}
          row3Col1={prod.row3Col1}
          row3Col2={prod.row3Col2}
          row3Col3={prod.row3Col3}
          row3Col4={prod.row3Col4}
          row4={prod.row4}
          row4Col1={prod.row4Col1}
          row4Col2={prod.row4Col2}
          row4Col3={prod.row4Col3}
          row4Col4={prod.row4Col4}
          zoom={prod.zoom}
        />
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

import React, { useEffect, useState, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RenderedPage from "../RenderedPage";
import ProductContext from "../../context/productContext/productContext";
import AsNavFor from "./AsNavFor";

const ProductViewer = () => {
  const { returnedProject, slider, returnedProduct, recursiveBackground } = useContext(ProductContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [state, setState] = useState({
    nav1: null,
    nav2: null
  })

  useEffect(() => {
    setState({
      nav1: ProductViewer.slider1,
      nav2: ProductViewer.slider2,
    })
  }, [])


  return (
    <div>
      <AsNavFor carouselSlides={slider} returnedProject={returnedProject} recursiveBackground={recursiveBackground} />
    </div>
  );
};

export default ProductViewer;

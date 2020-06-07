import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RenderedPage from "../layoutComponents/RenderedPage";
import RenderedCover from "../layoutComponents/RenderedCover";
import { render } from '@testing-library/react';

class ProductViewer extends React.Component {


    // props.getLayoutsForId
    // props.getThemesForId 
    // listOfPropsForComponents

    constructor(props) {
        super(props);
        this.state = {
            layoutsAndThemesForProduct: [this.props.layoutsAndThemesForProduct],
            listOfPropsForComponents: []
        };
    }


    componentDidMount() {
        console.log(this.props.layoutsAndThemesForProduct)
        if (this.props.layoutsAndThemesForProduct !== undefined) {
            this.setState(prevState => ({ layoutsAndThemesForProduct: [...prevState.layoutsAndThemesForProduct] }, () => {
                this.state.layoutsAndThemesForProduct.forEach(lt => this.props.getThemesForId(lt))
            }))
            console.log("e null")
        }
    }


    getAttributesForView = async (id) => {
        return this.props.getThemesForId(id)
    }

    showOnlyForCategory = (prod, categ) => {
        return (prod.tipLayout === categ ? true : false)
    };



    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (


            <div>
                <Slider {...settings}>
                    {(this.props.layoutsAndThemesForProduct !== undefined) && this.props.layoutsAndThemesForProduct.map(

                        prod => <div key={prod.id}>
                            {this.showOnlyForCategory(prod, "Pages") &&

                                <div >
                                    {(this.props.getLayoutsForId(prod.id) !== undefined) ? <RenderedPage
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
                                        zoom={prod.zoom} /> : ""}
                                </div>}


                            {this.showOnlyForCategory("Cover") &&
                                <RenderedCover
                                    tipLayout={prod.tipLayout}
                                    layoutWidth={prod.layoutWidth}
                                    layoutHeight={prod.layoutHeight}
                                    coverHasImage={prod.coverHasImage}
                                    coverImageWidth={prod.coverImageWidth}
                                    coverImageHeight={prod.coverImageHeight}
                                    coverImageTopPosition={prod.coverImageTopPosition}
                                    coverImageLeftPosition={prod.coverImageLeftPosition}
                                    zoom={prod.zoom} />}
                        </div>)}

                </Slider>
            </div>







        )
    }
}

export default ProductViewer

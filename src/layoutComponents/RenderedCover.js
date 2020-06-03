import React from 'react'
import Grid from "@material-ui/core/Grid";

const RenderedCover = ({
    tipLayout,
    layoutWidth,
    layoutHeight,
    coverHasImage,
    coverImageWidth,
    coverImageHeight,
    coverImageTopPosition,
    coverImageLeftPosition,
    zoom,
    themeImage,
    coverThemeImage
}) => {


    const layoutStyle = {
        backgroundImage: `url(${themeImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: `${tipLayout === "" ? "none" : "inherit"}`,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: `${layoutWidth}px`,
        height: `${layoutHeight}px`,
        margin: "auto",
        border: "1px solid #000000",
        transform: "scale(" + zoom + ")",
        position: "relative"
    }

    const imagePlaceHolder = {
        backgroundImage: `url(${coverThemeImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: `${coverHasImage === true ? "inherit" : "none"}`,
        border: "1px solid #000",
        width: `${coverImageWidth}px`,
        height: `${coverImageHeight}px`,
        position: "absolute",
        top: `${coverImageTopPosition}px`,
        left: `${coverImageLeftPosition}px`

    }



    return (
        <div>
            <div id="layoutStyle" style={layoutStyle}>
                <div id="imagePlaceHolder" style={imagePlaceHolder}></div>
            </div>
        </div>
    )
}

export default RenderedCover

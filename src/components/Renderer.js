import React, { useState, useEffect, useContext } from 'react'
import Draggable from 'react-draggable';
import Button from "@material-ui/core/Button";

import RenderedPage from "./RenderedPage";
import RenderedCover from "./RenderedCover";




const Renderer = (props) => {

    const {
        rendererWidth,
        rendererHeight,
        tipLayout,
        zoomIn,
        zoomOut
    } = props

    const [dragState, setDragState] = useState("")

    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        setDragState({
            renderer: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };


    const showOnlyForCategory = (category) => {
        const categs = [...category];
        let conditionEval = categs.includes(tipLayout);
        return (
            tipLayout !== "" &&
            conditionEval === true) ? true : false
    }




    const rendererSettings = {
        width: `${rendererWidth}px`,
        height: `${rendererHeight}px`,
        background: "#f0f0f0",
        paddingTop: "100px",
        overflow: "hidden"
    }



    return (
        <div>

            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF", margin: "0px 20px 20px 0px" }}
                onClick={() => {
                    zoomOut();
                }}
            >
                Zoom in
          </Button>
            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF", margin: "0px 20px 20px 0px" }}
                onClick={() => {
                    zoomIn();
                }}
            >
                Zoom out
          </Button>


            <div id="renderer" style={rendererSettings}>


                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                    onDrag={handleDrag}
                >
                    <div>
                        <div className="handle">

                            {showOnlyForCategory(["Pagina"]) &&

                                <div>
                                    <RenderedPage layoutSpecs={{ ...props }} />
                                </div>}


                            {showOnlyForCategory(["CopertaC1C4", "CopertaC2", "CopertaC3"]) &&
                                <RenderedCover layoutSpecs={{ ...props }} />}

                        </div>
                    </div>
                </Draggable>


            </div>

        </div>

    )
}

export default Renderer

import React, { useState, useContext } from 'react'
import Button from "@material-ui/core/Button";
import LayoutContext from "../../context/layoutsContext/layoutContext"
import Slider from "../productComponents/slider";


const ViewerComponent = ({ id, name, tipLayout, categLayout, }) => {


    const layoutsContext = useContext(LayoutContext);

    const { getLayoutsForId, deleteLayoutsForId, duplicateLayoutsForId } = layoutsContext;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };




    return (

        <Slider {...settings} >

            {layoutsContext.layoutsList ? layoutsContext.layoutsList.map(l => {

                return <div key={l.id} style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)", padding: "10px", marginRight: "30px", marginBottom: "20px", width: "200px", display: "inline-block" }}>
                    <h2>{l.name}</h2>
                    <p>ID : {l.id}</p>
                    <p>{l.tipLayout}</p>
                    <p>{l.categLayout}</p>

                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#e14013", color: "#FFF" }}
                        onClick={(event) => getLayoutsForId(l.id)}
                    >
                        Vezi layout
                  </Button>
                    <br /> <br />
                    <Button
                        disabled
                        variant="contained"
                        style={{ backgroundColor: "#7f7f7f", color: "#FFF" }}
                        onClick={(event) => getLayoutsForId(l.id)}
                    >
                        Editeaza layout
                  </Button>
                    <br /> <br />
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#e14013", color: "#FFF" }}
                        onClick={(event) => deleteLayoutsForId(l.id)}

                    >
                        Sterge layout
                  </Button>
                </div>

            }) : ""}

        </Slider>)
}


export default ViewerComponent; 
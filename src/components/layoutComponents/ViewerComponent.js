import React, { useState, useContext } from 'react'
import Button from "@material-ui/core/Button";
import LayoutContext from "../../context/layoutsContext/layoutContext"
import Slider from "../productComponents/slider";
import ImageUploader from 'react-images-upload';


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

    const onDrop = (event, id) => {
        console.log("ViewerComponent.js _ onDrop() : " + event, id)
        layoutsContext.updateLayoutBackground(event[0], id);
    }


    return (

        <Slider {...settings} >

            {layoutsContext.layoutsList ? layoutsContext.layoutsList.map(l => {

                return <div key={l.id} style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)", padding: "30px", marginRight: "30px", marginBottom: "20px", width: "200px", display: "inline-block" }}>
                    <h2>{l.name}</h2>
                    <p>ID : {l.id}</p>
                    <p>Tip layout: {l.tipLayout}</p>
                    <p>Categori layout: {l.categLayout}</p>

                    <br />
                    <h2 style={{ textAlign: "left" }}>Imagine background</h2>
                    <img src={l.backgroundLayout} style={{ height: "120px", width: "auto", margin: "0 auto" }} />
                    <br /><br />
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
                    <br />
                    <ImageUploader
                        id="buttonUpload"
                        label="Marime imagine max: 4MB se accepta doar .jpg, .png"
                        withIcon={false}
                        buttonText='Alege imagine layout'
                        onChange={(event) => onDrop(event, l.id)}
                        imgExtension={['.jpg', '.png']}
                        maxFileSize={50000000}
                        withPreview={true}
                        withLabel={false}
                        fileContainerStyle={{
                            padding: "0px",
                            alignItems: "flex-start",
                            margin: "10px auto",
                            boxShadow: "none",
                        }}
                    />


                </div>

            }) : ""}

        </Slider>)
}


export default ViewerComponent; 
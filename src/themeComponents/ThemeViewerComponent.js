import React from 'react'
import Button from "@material-ui/core/Button";


const ViewerComponent = ({ id, name, themeImage, deleteThemeForId, getThemesForId }) => {
    return (
        <div key={id} style={{
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            padding: "10px",
            marginBottom: "20px",
            backgroundImage: `url(${themeImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>

            <h2>{name}</h2>
            <p>ID : {id}</p>
            <br />
            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={(event) => getThemesForId(id)}
            >
                Editeaza tema
                      </Button>
            <br /> <br />
            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={(event) => deleteThemeForId(id)}

            >
                Sterge tema
                      </Button>
            <br /> <br />
            {/* <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={(event) => duplicateLayoutsForId(id)}

            >
                Duplica album
                      </Button> */}

        </div>
    )
}

export default ViewerComponent

import React from 'react'
import Button from "@material-ui/core/Button";


const ViewerComponent = ({ id, name, tipLayout, categLayout, getLayoutsForId, deleteLayoutsForId, duplicateLayoutsForId }) => {
    return (
        <div key={id} style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)", padding: "10px", marginBottom: "20px" }}>
            <h2>{name}</h2>
            <p>ID : {id}</p>
            <p>{tipLayout}</p>
            <p>{categLayout}</p>

            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={(event) => getLayoutsForId(id)}
            >
                Editeaza album
                      </Button>
            <br /> <br />
            <Button
                variant="contained"
                style={{ backgroundColor: "#e14013", color: "#FFF" }}
                onClick={(event) => deleteLayoutsForId(id)}

            >
                Sterge album
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

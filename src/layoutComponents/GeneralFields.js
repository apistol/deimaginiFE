import React, { useEffect } from 'react'
import TextField from "@material-ui/core/TextField";
import DropDown from "../components/lowLeveComponents/DropDown";



const GeneralFields = ({ handleTextUpdate, handleChangeDropdown, name, categLayout, tipLayout, layoutWidth, layoutHeight }) => {

    useEffect(() => { }, [])

    return (
        <div>

            <TextField
                label="Denumeste layoutul"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="name"
                value={name}
            />
            <br />

            <DropDown
                options={["Clasic", "Horizon", "Panoramic clasic", "Panoramic horizon"]}
                value={categLayout}
                label="Categorie layout"
                name="categLayout"
                handleChangeDropdown={(event) => handleChangeDropdown(event)}
            />
            <br />
            <DropDown
                options={["CopertaC1C4", "CopertaC2", "CopertaC3", "Pagina"]}
                value={tipLayout}
                label="Tip layout"
                name="tipLayout"
                handleChangeDropdown={(event) => handleChangeDropdown(event)}
            />

            <TextField
                label="Latime layout"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="layoutWidth"
                value={layoutWidth}
            />
            <br />

            <TextField
                label="Inaltime layout"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="layoutHeight"
                value={layoutHeight}
            />


            <br />

        </div>
    )
}


export default GeneralFields
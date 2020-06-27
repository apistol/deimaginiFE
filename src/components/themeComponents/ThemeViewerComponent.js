import React, { useContext } from 'react'
import Button from "@material-ui/core/Button";

import ThemesContext from "../../context/themesContext/themeContext"


const ThemeViewer = () => {

    const themesContext = useContext(ThemesContext);

    const { } = themesContext;

    const generatedList = themesContext.themesList ? themesContext.themesList.map(g => {
        return (
            <div key={g.id} style={{
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                padding: "10px",
                marginBottom: "20px",
                //  backgroundImage: `url(${themeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>

                <h2>{g.name}</h2>
                <p>ID : {g.id}</p>
                <br />
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#e14013", color: "#FFF" }}
                    onClick={(event) => themesContext.getThemeForId(g.id)}
                >
                    Vezi tema
                      </Button>
                <br /> <br />
                <Button
                    disabled
                    variant="contained"
                    style={{ backgroundColor: "#7f7f7f", color: "#FFF" }}
                    onClick={(event) => themesContext.getThemeForId(g.id)}
                >
                    Duplica tema
                      </Button>
                <br /> <br />
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#e14013", color: "#FFF" }}
                    onClick={(event) => themesContext.deleteThemeForId(g.id)}

                >
                    Sterge tema
                      </Button>
                <br /> <br />


            </div>
        )
    }) : [];



    return generatedList
}

export default ThemeViewer

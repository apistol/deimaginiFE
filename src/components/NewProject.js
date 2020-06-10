import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


import DropDown from "./lowLeveComponents/DropDown";
import ProjectsContext from "../context/projectsContext/projectContext"



const NewProject = (props) => {

  const contextType = useContext(ProjectsContext);

  const [project, setProject] = useState({
    id: "",
    name: "",
    pages: 0,
    checkedHasCover: false,
    coverWidth: "",
    coverHeight: "",
    pageWidth: "",
    pageHeight: "",
    tipHartie: "",
    pretRon: "",
    pretDolari: "",
    pretEuro: "",
    discount: "",
    tipProiect: "",
    picture: null,
    returnedProject: null
  })



  useEffect(() => {
    console.log(contextType.projects.returnedProject);
    (contextType.projects.returnedProject !== undefined) && setProject(prevState => ({ ...contextType.projects.returnedProject }))
  }, [contextType.projects.returnedProject])

  const handleTextUpdate = (event) => {
    this.setState({ ...project, [event.target.name]: event.target.value });
  };

  const handleChangeCheck = (event) => {
    this.setState({ ...project, [event.target.name]: event.target.checked });
  };

  const handleChangeDropdown = (value) => {
    this.setState({ ...project, [value.target.name]: value.target.value });
  };



  return (
    <Container
      direction="column"
      justify="flex-start"
      style={{
        marginBottom: "60px",
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "#e14013",
          color: "#FFF",
          marginRight: "8px",
        }}
        onClick={() => {
          this.context.createNewProject(project);
        }}
      >
        {project.name !== "" ? "Creeaza" : "Update"}
      </Button>



      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Denumeste proiectul"
            type="text"
            onChange={() => handleTextUpdate}
            name="name"
            value={project.name}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Numar pagini"
            type="text"
            onChange={() => handleTextUpdate}
            name="pages"
            value={project.pages}
          />

          <DropDown
            options={["Album", "Calendar", "Carte", "Cadou", "Wall art", "Decor"]}
            value={project.tipProiect}
            label="Tip proiect"
            name="tipProiect"
            handleChangeDropdown={() => handleChangeDropdown}
          />

          <br />
          <br />
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={project.checkedHasCover}
                    onChange={() => handleChangeCheck}
                    name="checkedHasCover"
                    color="primary"
                  />
                }
                label="Are coperta"
              />
            </FormGroup>
          </FormControl>
          <br />
          <TextField
            id="standard-basic1"
            label="Latime coperta"
            type="text"
            onChange={() => handleTextUpdate}
            name="coverWidth"
            value={project.coverWidth}
          />
          <br />
          <TextField
            id="standard-basic2"
            label="Inaltime coperta"
            type="text"
            onChange={() => handleTextUpdate}
            name="coverHeight"
            value={project.coverHeight}
          />
          <br />
          <TextField
            id="standard-basic3"
            label="Latime pagina"
            type="text"
            onChange={() => handleTextUpdate}
            name="pageWidth"
            value={project.pageWidth}
          />
          <br />
          <TextField
            id="standard-basic4"
            label="Inaltime pagina"
            type="text"
            onChange={() => handleTextUpdate}
            name="pageHeight"
            value={project.pageHeight}
          />
        </Grid>
        <Grid item xs={4}>
          <DropDown
            options={["hartie creponata", "hartie laminata", "carton"]}
            value={project.tipHartie}
            label="Tip hartie"
            name="tipHartie"
            handleChangeDropdown={() => handleChangeDropdown}
          />

          <TextField
            id="standard-basic5"
            label="Pret Ron"
            type="text"
            onChange={() => handleTextUpdate}
            name="pretRon"
            value={project.pretRon}
          />
          <br />
          <TextField
            id="standard-basic6"
            label="Pret Dolari"
            type="text"
            onChange={() => handleTextUpdate}
            name="pretDolari"
            value={project.pretDolari}
          />
          <br />
          <TextField
            id="standard-basic7"
            label="Pret Euro"
            type="text"
            onChange={() => handleTextUpdate}
            name="pretEuro"
            value={project.pretEuro}
          />
          <br />
          <TextField
            id="standard-basic8"
            label="Discount"
            type="text"
            onChange={() => handleTextUpdate}
            name="discount"
            value={project.discount}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewProject;

import React, {Component, Fragment} from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ProjectSelector from './components/ProjectSelector'
import Stepper  from './components/Stepper'
import ModelSelector from './components/ModelSelector'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';


class App extends Component{ 

  constructor(){
    super()
    this.state = {
      projectName : "",
      selectedItem : "",
      stepperProgress:0,
      stepperStep:0
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.productChecked = this.productChecked.bind(this)
    this.modelChecked = this.modelChecked.bind(this)
  }

  handleTitleChange (name) {
    this.setState( { projectName : name,
                      stepperStep:1}
    )
  }

  handleTitleUpdate = (event) => {
    this.setState({title: event.target.value});
  } 

  productChecked (value) {
    this.setState({selectedItem : value,
                   stepperStep:1})
  }

  modelChecked (value) {
    this.setState({
                   stepperStep:2})
  }

  

  handleStepperIncrement = () => {
    this.setState( prevState => {
      return { stepperProgress : prevState.stepperProgress + 1 }
    })
  }
  handleStepperDecrement = () => {
    this.setState( prevState => {
      return { stepperProgress : prevState.stepperProgress - 1 }
    })
  }

  render(){
    return (
      <div className="App">
          <Navigation projectName={this.state.projectName} handleTitleChange={this.handleTitleChange}/>
          <br/><br/>
         <Stepper 
            selectedItem={this.state.selectedItem}
            selectedModel={this.state.selectedModel}
            stepperProgress={this.state.stepperProgress}
            stepperStep={this.state.stepperStep}
            handleStepperIncrement={this.handleStepperIncrement}
            handleStepperDecrement={this.handleStepperDecrement}/>
          <br/><br/>



          { (this.state.stepperProgress === 0 ) && 

          <Container>
            <TextField id="standard-basic" label="Denumeste proiectul" onChange={this.handleTitleUpdate}/><br/><br/>
            <Button variant="contained" style={{backgroundColor:"#e14013" , color:"#FFF"}} onClick={ () => this.handleTitleChange(this.state.title)}>
                Creeaza
            </Button>
          <br/>
          <br/>
          <br/>
          <br/>

            <ProjectSelector productChecked={this.productChecked} selectedItem={this.state.selectedItem}/>
          </Container>
          }


          { (this.state.stepperProgress === 1 ) && 

          <ModelSelector modelChecked={this.modelChecked}/>

          }
          
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';

class Uploader extends Component{


  constructor(){
    super();
    this.state = {
        screams : []
    }
}

componentDidMount(){
    const screamResponse = axios.get('/screams').then( data => console.log(data)).catch(err => console.error(err))
    this.setState({ screams : screamResponse})
    console.log(screamResponse)
    console.log(this.state.screams.data)
}


  state = {
    selectedFile: null
  }


  fileSelectedHandler = event => {
    this.setState(
      {
        selectedFile: event.target.files[0]
      }
    )
     
  }

  fileUploadHandler  = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile,  this.state.selectedFile.name)
    axios.post("https://europe-west1-socialapp-26d79.cloudfunctions.net/api/user/image" , fd)
    .then( data => { console.log(data)})
    .catch( err => { console.log(err)})
   }  

  render(){
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}

export default Uploader;

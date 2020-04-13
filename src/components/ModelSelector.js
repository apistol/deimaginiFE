import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import BookFlipPage from './BookFlipPage'


export class ModelSelector extends Component {

   

    render() {
        return (
            <Container>
                <BookFlipPage modelChecked={this.props.modelChecked}/>
            </Container>
        )
    }
}

export default ModelSelector

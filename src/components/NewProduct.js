import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProductFields from "../productComponents/ProductFields";
import ProductViewer from "../productComponents/ProductViewer";


class NewProduct extends React.Component {
    state = {
        layoutsAndThemesForProduct: [],
        propsForLayoutsAndThemesForProduct: []
    };

    // componentDidMount() {
    //     this.state.layoutsAndThemesForProduct.forEach( lt => this.setState( prevState => ({
    //         propsForLayoutsAndThemesForProduct: [...prevState.propsForLayoutsAndThemesForProduct, this.props.getLayoutsForId(lt.id)]
    //     }))
    // }

    handleComponentPush = (id, type) => {
        const product = { id, type }
        this.setState(prevState => ({ layoutsAndThemesForProduct: [...prevState.layoutsAndThemesForProduct, product] }))
    }


    render() {


        // display array in slider

        // delete from array
        // save product



        return (
            <Container
                direction="column"
                justify="flex-start"
                style={{
                    marginBottom: "60px",
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <ProductFields
                            projects={this.props.projects}
                            layouts={this.props.layouts}
                            themes={this.props.themes}
                            projects={this.props.projects}
                            handleComponentPush={this.handleComponentPush}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <ProductViewer
                            layoutsAndThemesForProduct={this.state.layoutsAndThemesForProduct}
                            getLayoutsForId={this.props.getLayoutsForId}
                            getThemesForId={this.props.getThemesForId}
                        />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default NewProduct;

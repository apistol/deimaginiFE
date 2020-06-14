import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProductFields from "../productComponents/ProductFields";
import ProductViewer from "../productComponents/ProductViewer";

import ProductContext from "../context/productContext/productContext"
import ProductState from "../context/productContext/ProductState"

const NewProduct = (props) => {

    return (
        <ProductState>
            <Container
                direction="column"
                justify="flex-start"
                style={{
                    marginBottom: "60px",
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <ProductFields/>
                    </Grid>
                    <Grid item xs={8}>
                        <ProductViewer />
                    </Grid>
                </Grid>
            </Container>
        </ProductState>
    );
}

export default NewProduct;

import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ProductFields from "../productComponents/ProductFields";
import ProductViewer from "../productComponents/ProductViewer";

import ProductContext from "../context/productContext/productContext"
import ProductState from "../context/productContext/ProductState"

const NewProduct = (props) => {

    const [products, setProducts] = useState({
        productsList: [],
        returnedProduct: "",

        layoutsList: [],
        themesList: [],
        projectsList: [],

        activeSlider: [],
    })

    const productsContext = useContext(ProductContext);

    const { layoutsList, themesList, projectsList } = { ...productsContext };


    useEffect(() => {
        setProducts({
            ...activeSlider,
            layoutsList: layoutsList,
            themesList: themesList,
            projectsList: projectsList,
        })
    }, [])


    const handleAlbumElementPush = (id, type) => {
        const newSlide = { id, type }
        setProducts({ activeSlider: [...activeSlider, newSlide] })
    }


    const {
        layouts,
        themes,
        projects,
        activeSlider
    } = products;

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
                        <ProductFields
                            handleAlbumElementPush={handleAlbumElementPush}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <ProductViewer
                            layoutsAndThemesForProduct={activeSlider}
                        // getLayoutsForId={productsContext.getLayoutsForId}
                        // getThemesForId={productsContext.getThemesForId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </ProductState>
    );
}

export default NewProduct;

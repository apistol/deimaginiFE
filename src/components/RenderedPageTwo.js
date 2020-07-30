import React, { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


const RenderedPageSecondaryPage = ({ layoutSpecs }) => {

    const {
        tipLayout,
        layoutWidth,
        layoutHeight,
        zoom,

        secondLayoutPaddingBetweenImages,
        secondLayoutBorderWidth,
        secondLayoutDropShadow,
        secondLayoutRowsLayout,
        secondLayoutLayoutPadding,
        secondLayoutRow1,
        secondLayoutRow1Col1,
        secondLayoutRow1Col2,
        secondLayoutRow1Col3,
        secondLayoutRow1Col4,
        secondLayoutRow2,
        secondLayoutRow2Col1,
        secondLayoutRow2Col2,
        secondLayoutRow2Col3,
        secondLayoutRow2Col4,
        secondLayoutRow3,
        secondLayoutRow3Col1,
        secondLayoutRow3Col2,
        secondLayoutRow3Col3,
        secondLayoutRow3Col4,
        secondLayoutRow4,
        secondLayoutRow4Col1,
        secondLayoutRow4Col2,
        secondLayoutRow4Col3,
        secondLayoutRow4Col4,
        secondLayoutZoom,
    } = layoutSpecs;

    const columnHeight = (layoutHeight - 2 * secondLayoutLayoutPadding) / secondLayoutRowsLayout;
    const innerColumnHeight = columnHeight - 2 * secondLayoutBorderWidth - 2 * (layoutHeight * (secondLayoutPaddingBetweenImages / 100));

    // console.log(columnHeight)
    // console.log(innerColumnHeight)
    // console.log(layoutHeight * (secondLayoutPaddingBetweenImages / 100))

    const layoutStyle = {
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: `${tipLayout === "" ? "none" : "inherit"}`,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: `${layoutWidth - 2 * secondLayoutLayoutPadding}px`,
        height: `${layoutHeight - 2 * secondLayoutLayoutPadding}px`,
        margin: "auto",
        border: "1px solid #000000",
        padding: `${secondLayoutLayoutPadding}px`,
        transform: "scale(" + zoom + ")",

    }

    const fixWrapping = {
        flexWrap: "inherit",
        height: `${layoutHeight / secondLayoutRowsLayout}px`
    }

    const column = {
        width: "100%",
        height: `${columnHeight}px`,
        padding: `${layoutHeight * (secondLayoutPaddingBetweenImages / 100)}px`
    }

    const innerColumn = {
        background: "none",
        borderRadius: "0px",
        height: `${innerColumnHeight}px`,
        border: `${secondLayoutBorderWidth}px solid #FFFFFF`,
        boxShadow: `0px 0px ${secondLayoutDropShadow}px 0px rgba(0,0,0,0.75)`,
        marginTop: "0px",
    }


    useEffect(() => {

    }, [])



    return (
        <div>
            <div id="layoutStyle" style={layoutStyle}>
                {/* row 1 */}
                {(secondLayoutRowsLayout >= 1) &&
                    <Grid container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        style={fixWrapping}>

                        {(secondLayoutRow1 >= 1) &&
                            <Grid item xs={secondLayoutRow1Col1} style={column}>
                                <div style={innerColumn} width={`${((layoutWidth - 2 * secondLayoutLayoutPadding) / secondLayoutRow1) - 2 * secondLayoutBorderWidth}px`}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow1 >= 2) &&
                            <Grid item xs={secondLayoutRow1Col2} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow1 >= 3) &&
                            <Grid item xs={secondLayoutRow1Col3} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow1 >= 4) &&
                            <Grid item xs={secondLayoutRow1Col4} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 2 */}
                {(secondLayoutRowsLayout >= 2) &&
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>

                        {(secondLayoutRow2 >= 1) &&
                            <Grid item xs={secondLayoutRow2Col1} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow2 >= 2) &&
                            <Grid item xs={secondLayoutRow2Col2} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow2 >= 3) &&
                            <Grid item xs={secondLayoutRow2Col3} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(secondLayoutRow2 >= 4) &&
                            <Grid item xs={secondLayoutRow2Col4} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 3 */}
                {(secondLayoutRowsLayout >= 3) &&
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>


                        {(secondLayoutRow3 >= 1) &&
                            <Grid item xs={secondLayoutRow3Col1} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow3 >= 2) &&
                            <Grid item xs={secondLayoutRow3Col2} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow3 >= 3) &&
                            <Grid item xs={secondLayoutRow3Col3} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow3 >= 4) &&
                            <Grid item xs={secondLayoutRow3Col4} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 4 */}
                {(secondLayoutRowsLayout >= 4) &&
                    <Grid
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>


                        {(secondLayoutRow4 >= 1) &&
                            <Grid item xs={secondLayoutRow4Col1} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow4 >= 2) &&
                            <Grid item xs={secondLayoutRow4Col2} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow4 >= 3) &&
                            <Grid item xs={secondLayoutRow4Col3} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(secondLayoutRow4 >= 4) &&
                            <Grid item xs={secondLayoutRow4Col4} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}
                    </Grid>}


            </div>

        </div >
    )
}


export default RenderedPageSecondaryPage


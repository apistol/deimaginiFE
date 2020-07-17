import React, { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';


const RenderedPage = ({ layoutSpecs }) => {

    const {
        rowsLayout,
        layoutPadding,
        paddingBetweenImages,
        borderWidth,
        dropShadow,
        tipLayout,
        layoutWidth,
        layoutHeight,
        zoom,
        row1,
        row1Col1,
        row1Col2,
        row1Col3,
        row1Col4,
        row2,
        row2Col1,
        row2Col2,
        row2Col3,
        row2Col4,
        row3,
        row3Col1,
        row3Col2,
        row3Col3,
        row3Col4,
        row4,
        row4Col1,
        row4Col2,
        row4Col3,
        row4Col4,
        themeImage,
        coverThemeImage
    } = layoutSpecs;

    const columnHeight = (layoutHeight - 2 * layoutPadding) / rowsLayout;
    const innerColumnHeight = columnHeight - 2 * borderWidth - paddingBetweenImages * (layoutHeight / 100);

    console.log("================================================")
    console.log("columnHeight : " + columnHeight)
    console.log("layoutHeight : " + layoutHeight)
    console.log("layoutPadding : " + layoutPadding)
    console.log("rowsLayout : " + rowsLayout)
    console.log("innerColumnHeight : " + innerColumnHeight)
    console.log("borderWidth : " + borderWidth)
    console.log("paddingBetweenImages : " + paddingBetweenImages)


    const layoutStyle = {
        backgroundImage: `url(${coverThemeImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: `${tipLayout === "" ? "none" : "inherit"}`,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: `${layoutWidth - 2 * layoutPadding}px`,
        height: `${layoutHeight - 2 * layoutPadding}px`,
        margin: "auto",
        border: "1px solid #000000",
        padding: `${layoutPadding}px`,
        paddingBottom: `${paddingBetweenImages * (layoutHeight / 100)}px`,
        transform: "scale(" + zoom + ")"
    }

    const fixWrapping = {
        flexWrap: "inherit",
        height: `${layoutHeight / rowsLayout}px`
    }

    const column = {
        width: "100%",
        height: `${columnHeight}px`,
        padding: `${layoutHeight * (paddingBetweenImages / 100)}px ${layoutHeight * (paddingBetweenImages / 100)}px 0px  ${layoutHeight * (paddingBetweenImages / 100)}px `
    }

    const innerColumn = {
        background: "none",
        borderRadius: "0px",
        height: `${innerColumnHeight}px`,
        border: `${borderWidth}px solid #FFFFFF`,
        boxShadow: `0px 0px ${dropShadow}px 0px rgba(0,0,0,0.75)`,
        marginTop: "0px",
    }


    useEffect(() => {

    }, [themeImage])



    return (
        <div>
            <div id="layoutStyle" style={layoutStyle}>
                {/* row 1 */}
                {(rowsLayout >= 1) &&
                    <Grid container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        style={fixWrapping}>

                        {(row1 >= 1) &&
                            <Grid item xs={row1Col1} style={column}>
                                <div style={innerColumn} width={`${((layoutWidth - 2 * layoutPadding) / row1) - 2 * borderWidth}px`}>

                                </div>
                            </Grid>}

                        {(row1 >= 2) &&
                            <Grid item xs={row1Col2} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(row1 >= 3) &&
                            <Grid item xs={row1Col3} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(row1 >= 4) &&
                            <Grid item xs={row1Col4} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 2 */}
                {(rowsLayout >= 2) &&
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>

                        {(row2 >= 1) &&
                            <Grid item xs={row2Col1} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(row2 >= 2) &&
                            <Grid item xs={row2Col2} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(row2 >= 3) &&
                            <Grid item xs={row2Col3} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}

                        {(row2 >= 4) &&
                            <Grid item xs={row2Col4} style={column}>
                                <div style={innerColumn}>

                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 3 */}
                {(rowsLayout >= 3) &&
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>


                        {(row3 >= 1) &&
                            <Grid item xs={row3Col1} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row3 >= 2) &&
                            <Grid item xs={row3Col2} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row3 >= 3) &&
                            <Grid item xs={row3Col3} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row3 >= 4) &&
                            <Grid item xs={row3Col4} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}
                    </Grid>}


                {/* row 4 */}
                {(rowsLayout >= 4) &&
                    <Grid
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>


                        {(row4 >= 1) &&
                            <Grid item xs={row4Col1} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row4 >= 2) &&
                            <Grid item xs={row4Col2} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row4 >= 3) &&
                            <Grid item xs={row4Col3} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}

                        {(row4 >= 4) &&
                            <Grid item xs={row4Col4} style={column}>
                                <div style={innerColumn}>
                                </div>
                            </Grid>}
                    </Grid>}


            </div>

        </div >
    )
}


export default RenderedPage


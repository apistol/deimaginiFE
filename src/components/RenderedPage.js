import React from 'react'
import Grid from "@material-ui/core/Grid";


const RenderedPage = ({ layoutSpecs }) => {

    const {
        rowsLayout,
        layoutPadding,
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
        themeImage
    } = layoutSpecs

    console.log("tipLayout " + tipLayout +
        "layoutWidth " + layoutWidth +
        "layoutHeight " + layoutHeight)


    const layoutStyle = {
        backgroundImage: `url(${themeImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: `${tipLayout === "" ? "none" : "inherit"}`,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: `${layoutWidth}px`,
        height: `${layoutHeight}px`,
        margin: "auto",
        border: "1px solid #000000",
        padding: `${layoutPadding}px`,
        transform: "scale(" + zoom + ")"
    }

    const fixWrapping = {
        flexWrap: "inherit",
        height: `${layoutHeight / rowsLayout}px`
    }

    const column = {
        border: "1px solid #000000",
        width: "100%",
        height: "100%"
    }


    return (
        <div>
            <div id="layoutStyle" style={layoutStyle}>
                {/* row 1 */}
                {(rowsLayout >= 1) &&
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                        style={fixWrapping}>

                        {(row1 >= 1) &&
                            <Grid item xs={row1Col1} style={column}>
                                row1col1
                    </Grid>}

                        {(row1 >= 2) &&
                            <Grid item xs={row1Col2} style={column}>
                                row1col2
                    </Grid>}

                        {(row1 >= 3) &&
                            <Grid item xs={row1Col3} style={column}>
                                row1col3
                    </Grid>}

                        {(row1 >= 4) &&
                            <Grid item xs={row1Col4} style={column}>
                                row1col4
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
                                row2col1
                    </Grid>}

                        {(row2 >= 2) &&
                            <Grid item xs={row2Col2} style={column}>
                                row2col2
                    </Grid>}

                        {(row2 >= 3) &&
                            <Grid item xs={row2Col3} style={column}>
                                row2col3
                    </Grid>}

                        {(row2 >= 4) &&
                            <Grid item xs={row2Col4} style={column}>
                                row2col4
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
                                row3col1
                    </Grid>}

                        {(row3 >= 2) &&
                            <Grid item xs={row3Col2} style={column}>
                                row3col2
                    </Grid>}

                        {(row3 >= 3) &&
                            <Grid item xs={row3Col3} style={column}>
                                row3col3
                    </Grid>}

                        {(row3 >= 4) &&
                            <Grid item xs={row3Col4} style={column}>
                                row3col4
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
                                row4col1
                    </Grid>}

                        {(row4 >= 2) &&
                            <Grid item xs={row4Col2} style={column}>
                                row4col2
                    </Grid>}

                        {(row4 >= 3) &&
                            <Grid item xs={row4Col3} style={column}>
                                row4col3
                    </Grid>}

                        {(row4 >= 4) &&
                            <Grid item xs={row4Col4} style={column}>
                                row4col4
                    </Grid>}
                    </Grid>}


            </div>

        </div>
    )
}

export default RenderedPage
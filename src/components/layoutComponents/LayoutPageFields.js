import React from 'react'
import TextField from "@material-ui/core/TextField";
import DropDown from "../lowLeveComponents/DropDown";


const LayoutPageFields = ({
    handleTextUpdate,
    handleChangeDropdown,
    rowsLayout,
    layoutPadding,
    paddingBetweenImages,
    borderWidth,
    dropShadow,
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
    row4Col4 }) => {



    return (

        <div>
            <br />
            <TextField
                id="standard-basic"
                label="Padding layout (px)"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="layoutPadding"
                value={layoutPadding}
            />
            <TextField
                id="standard-basic"
                label="Padding imagini (%)"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="paddingBetweenImages"
                value={paddingBetweenImages}
            />
            <TextField
                id="standard-basic"
                label="Latime border imagini"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="borderWidth"
                value={borderWidth}
            />
            <TextField
                id="standard-basic"
                label="Spread shadow"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="dropShadow"
                value={dropShadow}
            />

            <br />

            {/* Number of rows */}
            <DropDown
                options={["1", "2", "3", "4"]}
                value={rowsLayout}
                label="Randuri layout"
                name="rowsLayout"
                handleChangeDropdown={handleChangeDropdown}
            />




            {/* ROW 1 */}


            {(rowsLayout >= 1) &&
                <div>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={row1}
                        label="Numar coloane row 1"
                        name="row1"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />

                    {(row1 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row1Col1"
                            value={row1Col1}
                        />
                    }

                    {(row1 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row1Col2"
                            value={row1Col2}
                        />
                    }

                    {(row1 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row1Col3"
                            value={row1Col3}
                        />
                    }

                    {(row1 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row1Col4"
                            value={row1Col4}
                        />
                    }
                </div>}




            {/* ROW 2 */}



            {(rowsLayout >= 1) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={row2}
                        label="Numar coloane row 2"
                        name="row2"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />

                    {(row2 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row2Col1"
                            value={row2Col1}
                        />
                    }

                    {(row2 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row2Col2"
                            value={row2Col2}
                        />
                    }

                    {(row2 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row2Col3"
                            value={row2Col3}
                        />
                    }

                    {(row2 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row2Col4"
                            value={row2Col4}
                        />
                    }
                </div>}




            {/* ROW 3 */}

            {(rowsLayout >= 3) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={row3}
                        label="Numar coloane row 3"
                        name="row3"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />

                    {(row3 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row2Col1"
                            value={row3Col1}
                        />
                    }

                    {(row3 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row3Col2"
                            value={row3Col2}
                        />
                    }

                    {(row3 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row3Col3"
                            value={row3Col3}
                        />
                    }

                    {(row3 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row3Col4"
                            value={row3Col4}
                        />
                    }
                </div>}



            {/* ROW 4 */}

            {(rowsLayout >= 4) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={row4}
                        label="Numar coloane row 4"
                        name="row4"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />

                    {(row4 >= 1) &&

                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row4Col1"
                            value={row4Col1}
                        />
                    }

                    {(row4 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row4Col2"
                            value={row4Col2}
                        />
                    }

                    {(row4 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row4Col3"
                            value={row4Col3}
                        />
                    }

                    {(row4 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="row4Col4"
                            value={row4Col4}
                        />
                    }
                </div>}

        </div>
    )
}


export default LayoutPageFields
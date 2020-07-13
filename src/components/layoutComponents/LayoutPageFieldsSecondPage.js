import React from 'react'
import TextField from "@material-ui/core/TextField";
import DropDown from "../lowLeveComponents/DropDown";


const LayoutPageFields = ({
    handleTextUpdate,
    handleChangeDropdown,
    secondLayoutRowsLayout,
    secondLayoutLayoutPadding,
    secondLayoutPaddingBetweenImages,
    secondLayoutBorderWidth,
    secondLayoutDropShadow,
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
}) => {



    return (

        <div>
            <br />
            <TextField
                id="standard-basic"
                label="Padding layout (px)"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="secondLayoutLayoutPadding"
                value={secondLayoutLayoutPadding}
            />
            <br />
            <TextField
                id="standard-basic"
                label="Padding imagini (%)"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="secondLayoutPaddingBetweenImages"
                value={secondLayoutPaddingBetweenImages}
            />
            <br />
            <TextField
                id="standard-basic"
                label="Latime border imagini"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="secondLayoutBorderWidth"
                value={secondLayoutBorderWidth}
            />
            <br />
            <TextField
                id="standard-basic"
                label="Spread shadow"
                type="text"
                onChange={(event) => handleTextUpdate(event)}
                name="secondLayoutDropShadow"
                value={secondLayoutDropShadow}
            />
            <br />
            {/* Number of rows */}
            <DropDown
                options={["1", "2", "3", "4"]}
                value={secondLayoutRowsLayout}
                label="Randuri layout"
                name="secondLayoutRowsLayout"
                handleChangeDropdown={(event) => handleChangeDropdown(event)}
            />




            {/* ROW 1 */}


            {(secondLayoutRowsLayout >= 1) &&
                <div>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={secondLayoutRow1}
                        label="Numar coloane row 1"
                        name="secondLayoutRow1"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />
                    <br />
                    {(secondLayoutRow1 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow1Col1"
                            value={secondLayoutRow1Col1}
                        />
                    }
                    <br />
                    {(secondLayoutRow1 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow1Col2"
                            value={secondLayoutRow1Col2}
                        />
                    }
                    <br />
                    {(secondLayoutRow1 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow1Col3"
                            value={secondLayoutRow1Col3}
                        />
                    }
                    <br />
                    {(secondLayoutRow1 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow1Col4"
                            value={secondLayoutRow1Col4}
                        />
                    }
                </div>}
            <br />



            {/* ROW 2 */}



            {(secondLayoutRowsLayout >= 1) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={secondLayoutRow2}
                        label="Numar coloane row 2"
                        name="secondLayoutRow2"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />
                    <br />
                    {(secondLayoutRow2 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow2Col1"
                            value={secondLayoutRow2Col1}
                        />
                    }
                    <br />
                    {(secondLayoutRow2 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow2Col2"
                            value={secondLayoutRow2Col2}
                        />
                    }
                    <br />
                    {(secondLayoutRow2 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow2Col3"
                            value={secondLayoutRow2Col3}
                        />
                    }
                    <br />
                    {(secondLayoutRow2 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow2Col4"
                            value={secondLayoutRow2Col4}
                        />
                    }
                </div>}
            <br />



            {/* ROW 3 */}

            {(secondLayoutRowsLayout >= 3) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={secondLayoutRow3}
                        label="Numar coloane row 3"
                        name="secondLayoutRow3"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />
                    <br />
                    {(secondLayoutRow3 >= 1) &&
                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow2Col1"
                            value={secondLayoutRow3Col1}
                        />
                    }
                    <br />
                    {(secondLayoutRow3 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow3Col2"
                            value={secondLayoutRow3Col2}
                        />
                    }
                    <br />
                    {(secondLayoutRow3 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow3Col3"
                            value={secondLayoutRow3Col3}
                        />
                    }
                    <br />
                    {(secondLayoutRow3 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow3Col4"
                            value={secondLayoutRow3Col4}
                        />
                    }
                </div>}
            <br />


            {/* ROW 4 */}

            {(secondLayoutRowsLayout >= 4) &&
                <div>
                    <p>---------------------------------------</p>
                    <DropDown
                        options={["1", "2", "3", "4"]}
                        value={secondLayoutRow4}
                        label="Numar coloane row 4"
                        name="secondLayoutRow4"
                        handleChangeDropdown={(event) => handleChangeDropdown(event)}
                    />
                    <br />
                    {(secondLayoutRow4 >= 1) &&

                        <TextField
                            label="Expand coloana 1"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow4Col1"
                            value={secondLayoutRow4Col1}
                        />
                    }
                    <br />
                    {(secondLayoutRow4 >= 2) &&

                        <TextField
                            label="Expand coloana 2"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow4Col2"
                            value={secondLayoutRow4Col2}
                        />
                    }
                    <br />
                    {(secondLayoutRow4 >= 3) &&

                        <TextField
                            label="Expand coloana 3"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow4Col3"
                            value={secondLayoutRow4Col3}
                        />
                    }
                    <br />
                    {(secondLayoutRow4 >= 4) &&

                        <TextField
                            label="Expand coloana 4"
                            type="text"
                            onChange={(event) => handleTextUpdate(event)}
                            name="secondLayoutRow4Col4"
                            value={secondLayoutRow4Col4}
                        />
                    }
                </div>}

        </div>
    )
}


export default LayoutPageFields
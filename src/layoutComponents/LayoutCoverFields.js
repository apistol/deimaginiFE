import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";


const LayoutCoverFields = ({
    handleChangeCheck,
    handleTextUpdate,
    coverHasImage,
    coverImageWidth,
    coverImageHeight,
    coverImageTopPosition,
    coverImageLeftPosition }) => {
    return (
        <div>

            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={coverHasImage}
                                onChange={handleChangeCheck}
                                name="coverHasImage"
                                color="primary"
                            />
                        }
                        label="Are imagine de coperta"
                    />
                </FormGroup>
            </FormControl>

            {coverHasImage &&
                <div>
                    <br />
                    <TextField
                        label="Latime img de coperta"
                        type="text"
                        onChange={(event) => handleTextUpdate(event)}
                        name="coverImageWidth"
                        value={coverImageWidth}
                    />
                    <br />
                    <TextField
                        label="Inaltime img de coperta"
                        type="text"
                        onChange={(event) => handleTextUpdate(event)}
                        name="coverImageHeight"
                        value={coverImageHeight}
                    />
                    <br />
                    <TextField
                        label="Pozitie top imagine"
                        type="text"
                        onChange={(event) => handleTextUpdate(event)}
                        name="coverImageTopPosition"
                        value={coverImageTopPosition}
                    />
                    <br />
                    <TextField
                        label="Pozitie stanga imagine"
                        type="text"
                        onChange={(event) => handleTextUpdate(event)}
                        name="coverImageLeftPosition"
                        value={coverImageLeftPosition}
                    />
                </div>
            }
        </div>
    )
}


export default LayoutCoverFields

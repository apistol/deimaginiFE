import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 250,
  },
}));

export default function SimpleSelect({
  label,
  value,
  name,
  options,
  handleChangeDropdown,
}) {
  const classes = useStyles();

  return (
    < div >
      <FormControl className={classes.formControl}>
        <InputLabel id={value}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          name={name}
          value={value}
          onClick={(event) => handleChangeDropdown(event)}
        >
          {options.map((option) => {
            return (
              <MenuItem key={Math.round(Math.random() * 1000)} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div >
  );
}

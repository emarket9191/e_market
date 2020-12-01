import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [trade, setTrade] = React.useState("");

  const handleChange = (event) => {
    setTrade(event.target.value);
  };

  return (
    <div>
      {/* <span>Trade Terms:</span> */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple"></InputLabel>
        <Select
          native
          defaultValue='Trade Terms'
          value={trade}
          onChange={handleChange}
          inputProps={{
            name: "trade",
            id: "age-native-simple",
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <option value="EX-Works">EX-Works</option>
          <option value="FOB">FOB</option>
          <option value="FCA">FCA </option>
          <option value="FAS">FAS</option>
          <option value="CFR">CFR</option>
          <option value="CIF">CIF</option>
          <option value="CPT">CPT</option>
          <option value="CIP">CIP</option>
          <option value="DAF">DAF</option>
          <option value="DES">DES</option>
          <option value="DEQ">DEQ</option>
          <option value="DDP">DDP</option>
          <option value="DDU">DDU</option>
        </Select>
      </FormControl>
    </div>
  );
}

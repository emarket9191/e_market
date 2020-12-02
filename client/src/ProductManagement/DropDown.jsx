import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { grey } from "@material-ui/core/colors";
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    backgroundColor: grey[300],
  },
}));

export default function NativeSelects({props}) {
  const classes = useStyles();
  const [categories, setCategories] = React.useState([])
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  async function getCategories(){
    await setCategories(props);
    console.log(props.length);
    console.log(categories.length);
  }
  useEffect(() => {
    getCategories();
  }, []); 
   const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined"  className={classes.formControl} id ="categoriesDropDown">
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
        className="categoriesDropDown"
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
           <option aria-label="None" value="" />
            {categories.map((category)=>
            <option value={category._id}>{category.category_name}</option>
            )}
        </Select>
      </FormControl>
    </div>
  );
}
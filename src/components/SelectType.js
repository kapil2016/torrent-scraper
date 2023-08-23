import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setSearchTerm, setCurrentPage, setType } from '../states/reducers/movie-reducer';
import { useDispatch } from 'react-redux';

export default function SelectSmall() {
  const dispatch = useDispatch()
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(setType(event.target.value));
    dispatch(setSearchTerm(""))
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Movies</InputLabel>
      <Select
        sx={{ background: 'gray', color: 'white' }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="movies">Movies</MenuItem>
        <MenuItem value="series">Series</MenuItem>

      </Select>
    </FormControl>
  );
}
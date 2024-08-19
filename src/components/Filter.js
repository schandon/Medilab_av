import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useDateFilter } from '../context/FilterContext';
import "../Styles/Filter.css"

export default function Filter() {
  const { date, setDate, modalidade, setModalidade } = useDateFilter();
  // const [busca, setBusca] = useState();
  const handleChangeModalidade = (event) => {
    setModalidade(event.target.value);
  };
  return (
    <div className="container-filtos">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className='filtroData'
          format='DD/MM/YYYY'
          onChange={(newData) => setDate(newData)}
          value={date}
          selectsStart
        />
        <Box className='filtroModalidade' sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Modalidade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={modalidade || ''}
              label="Modalidade"
              onChange={handleChangeModalidade}
            >
              <MenuItem value={"MR"}>MR</MenuItem>
              <MenuItem value={"CT"}>CT</MenuItem>
              <MenuItem value={"CR"}>CR</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          className='filtroTudo'
          variant="outlined"
          placeholder="Pesquisar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className='lupa' />
              </InputAdornment>
            ),
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

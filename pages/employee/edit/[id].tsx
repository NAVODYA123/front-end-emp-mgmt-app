
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { minWidth } from '@mui/system'




const editEmployeeRecord =( ) => {



    const [gender, setGender] = useState('M')

    const handleChange = (event: SelectChangeEvent) => {
      setGender(event.target.value)
    }
  
    return (
      <Box>
        <Box> Edit employee record</Box>
  
        <Box
          sx={{
           
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
            mt: 4,
          }}
        >
          <Box
            component='form'
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3,
              borderRadius: '16px',
              pt: 4,
              pb: 4,
            }}
          >
            {/* <Grid container alignItems="flex-start" spacing={4} columns={16}>
        <Grid style={{ marginTop: 15 }}  xs={6}>       */}
            <Button variant='outlined' component='label' sx={{ height:'120px', width:'120px',   borderRadius:'50%'}}>
              <Avatar
                alt=''
                src=''
                sx={{ width: 100, height: 100 }}
                variant='circular'
              />
              <input hidden accept='image/*' multiple type='file' />
            </Button>
  
            <TextField
              required
              id='standard-basic'
              label='First name'
              defaultValue='First Name'
              variant='standard'
            />
            <TextField
              required
              id='standard-basic'
              label='Last Name'
              defaultValue='Last Name'
              variant='standard'
            />
  
            <TextField
              required
              id='standard-basic'
              label='Email'
              defaultValue='Email'
              variant='standard'
            />
  
            <TextField
              required
              id='standard-required'
              label='Phone'
              defaultValue='Phone'
              variant='standard'
            />
            <FormControl variant='standard' sx={{ m: 1, minWidth: '200px' }}>
              <Select value={gender} onChange={handleChange} label='Gender'>
                <MenuItem value={'Select gender'}></MenuItem>
  
                <MenuItem value={'M'}>Male</MenuItem>
                <MenuItem value={'F'}>Female</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Button variant='contained'>Add Record</Button>
              <Button variant='outlined'>Cancel</Button>
            </Box>
            {/* </Grid>
          </Grid> */}
          </Box>
        </Box>
      </Box>
    )

}

export default editEmployeeRecord
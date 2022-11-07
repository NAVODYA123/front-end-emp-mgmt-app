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
import useFormValidateHook from '../.././src/hooks/useFormValidateHook'
import InputAdornment from '@mui/material/InputAdornment';


export type formData = {
firstName: string,
lastName: string,
gender: string,
phone: string,
email: string,
}




const AddNewEmployee = () => {
  const [gender, setGender] = useState('Select gender')
  const [fieldError, setFieldError] = useState(false)
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [phone, setPhone] = useState<number>(0)
  const [email, setEmail] = useState('')

 const {errorMesseges,errorState,fieldValue,validateFormData}= useFormValidateHook()

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const onFormSubmit = () => {

    validateFormData({firstName,lastName,gender,phone,email})

   
  }

  const handleFieldChange = () => {}

  return (
    <Box>
      <Box> Add new employee</Box>

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
            minHeight: '600px',
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: '16px',
            pt: 4,
            pb: 4,
          }}
        >
          {/* <Grid container alignItems="flex-start" spacing={4} columns={16}>
      <Grid style={{ marginTop: 15 }}  xs={6}>       */}
          <Button
            variant='outlined'
            component='label'
            sx={{ height: '120px', width: '120px', borderRadius: '50%' }}
          >
            <Avatar
              alt=''
              src=''
              sx={{ width: 100, height: 100 }}
              variant='circular'
            />
            <input hidden accept='image/*' multiple type='file' />
          </Button>

          <TextField
            error={fieldError}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='First name'
            variant='standard'
            onChange={(e) => setfirstName(e?.target.value)}
          />
          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Last Name'
            variant='standard'
            onChange={(e) => setlastName(e?.target.value)}
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Email'
            variant='standard'
            onChange={(e) => setEmail(e?.target.value)}
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-required'
            label='Phone'
            variant='standard'
            InputProps={{
              startAdornment: <InputAdornment position="start">+94</InputAdornment>,
            }}
            onChange={(e) => setPhone(Number(e?.target.value))}
          />
          <FormControl variant='standard' sx={{ m: 1, width: '60%' }}>
            <InputLabel id='gender-select-label'>Select a gender</InputLabel>
            <Select
              labelId='gender-select-label'
              value={gender}
              onChange={handleChange}
              label='Select a gender'
            >
              <MenuItem value={'M'}>Male</MenuItem>
              <MenuItem value={'F'}>Female</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              height: '80px',
              width: '60%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button variant='contained' onClick={() => onFormSubmit()}>
              Add Record
            </Button>
            <Button variant='outlined'>Cancel</Button>
          </Box>
          {/* </Grid>
        </Grid> */}
        </Box>
      </Box>
    </Box>
  )
}

export default AddNewEmployee

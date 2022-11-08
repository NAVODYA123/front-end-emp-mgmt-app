import { useState, useEffect } from 'react'
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
import InputAdornment from '@mui/material/InputAdornment'
import {
  Employee,
  messegeTypes,
  FormData,
} from '../../src/types/employeeDataTypes'

// export type formData = {
// firstName: string,
// lastName: string,
// gender: string,
// phone: string,
// email: string,
// }

const AddNewEmployee = () => {
  const [gender, setGender] = useState('F')
  // const [fieldError, setFieldError] = useState(false)
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [phone, setPhone] = useState<number>(0)
  const [email, setEmail] = useState('')

  const { validationStatus, errorMesseges, fieldValues, validateFormData } =
    useFormValidateHook()
  // console.log('object keys',Object.keys(errorMesseges)[0])

  console.log('errorMesseges here:', errorMesseges)

  useEffect(() => {}, [])

  const addNewEmployeeRecord = async (fieldValues?: FormData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(fieldValues),
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const onFormSubmit = async () => {
    validateFormData({ firstName, lastName, gender, phone, email })
    console.log('validation status', validationStatus)
    if (validationStatus) {
      await addNewEmployeeRecord(fieldValues)
    }
  }

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
            error={errorMesseges?.firstName.length!==0}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='First name'
            variant='standard'
            helperText={errorMesseges?.firstName}
            onChange={(e) => setfirstName(e?.target.value)}
          />
          <TextField
           error={errorMesseges?.lastName.length!==0}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Last Name'
            variant='standard'
            helperText={errorMesseges?.lastName}
            onChange={(e) => setlastName(e?.target.value)}
          />

          <TextField
           error={errorMesseges?.email.length!==0}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Email'
            variant='standard'
            helperText={errorMesseges?.email}
            onChange={(e) => setEmail(e?.target.value)}
          />

          <TextField
            error={errorMesseges?.phone?.length !== 0}
            sx={{ width: '60%' }}
            required
            id='standard-required'
            label='Phone'
            variant='standard'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>+94</InputAdornment>
              ),
            }}
            helperText={errorMesseges?.phone}
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

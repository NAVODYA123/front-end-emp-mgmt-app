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
import Typography from '@mui/material/Typography'
import { addNewEmployeeRecord } from '../../services/restservices'
import {
  Employee,
  messegeTypes,
  FormData,
} from '../../src/types/employeeDataTypes'
import FormTemplate from '../../src/components/commons/FormTemplate'

const AddNewEmployee = () => {
  const [gender, setGender] = useState('F')
  const [firstname, setfirstName] = useState('')
  const [lastname, setlastName] = useState('')
  const [number, setPhone] = useState<number>(0)
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')


const newEmployeeObj:Employee = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  number: '',
  gender: 'M',
  photo: '',
}

  const { validationStatus, errorMesseges, fieldValues, validateFormData } = useFormValidateHook()
  
  useEffect(() => {}, [])

  // const addNewEmployeeRecord = async (fieldValues?: FormData) => {    
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify(fieldValues),
  //   })
  // }

  // const handleChange = (event:any) => {   
  //   setGender(event?.target.value)
  // }

  // const addNewRecord = async () => {
  //   validateFormData({ firstname, lastname, gender, number, email, photo })
  //   console.log('validation status', validationStatus)
  //   if (validationStatus) {
  //     await addNewEmployeeRecord(fieldValues)
  //   }
  // }

  return (
    <Box>   
     <FormTemplate isEdit={false} employee={newEmployeeObj}/>
        {/* <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            pl:8,
            pt:4
          }}
        > 
        <Typography variant='h4' color='primary.dark' sx={{textTransform:'capitalize'}}>
          Add Employee</Typography>
        </Box>
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
            error={errorMesseges?.firstname.length!==0}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='First name'
            variant='standard'
            helperText={errorMesseges?.firstname}
            onChange={(e) => setfirstName(e?.target.value)}
          />
          <TextField
           error={errorMesseges?.lastname.length!==0}
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Last Name'
            variant='standard'
            helperText={errorMesseges?.lastname}
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
            error={errorMesseges?.number?.length !== 0}
            sx={{ width: '60%' }}
            required
            id='standard-required'
            label='number'
            variant='standard'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>+94</InputAdornment>
              ),
            }}
            helperText={errorMesseges?.number}
            onChange={(e) => setPhone(Number(e?.target.value))}
          />
          <FormControl variant='standard' sx={{ m: 1, width: '60%' }}>
            <InputLabel id='gender-select-label'>Select a gender</InputLabel>
            <Select
              labelId='gender-select-label'
              value={gender}
              onChange={(e)=>handleChange(e?.target.value)}
              label='Select a gender'
            ><MenuItem value="">
            <em>None</em>
          </MenuItem>
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
            <Button variant='contained' onClick={() => addNewRecord()}>
              Add Record
            </Button>
            <Button variant='outlined'>Cancel</Button>
          </Box>
        
        </Box>
      </Box>
       */}
    </Box>
  )
}

export default AddNewEmployee

import {
  Box,
  Typography,
  Button,
  Avatar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useState } from 'react'
import { Employee } from '../../types/employeeDataTypes'

type Props = {
  isEdit: boolean
  employee?: Employee
}

const FormTemplate = ({ isEdit, employee }: Props) => {
  const [employeeRecord, setEmpRecord] = useState(
    isEdit
      ? employee
      : {
          id: '',
          firstname: '',
          lastname: '',
          email: '',
          number: '',
          gender: 'M',
          photo: '',
        }
  )

  const editEmployeeRecord = async (id: string, data?: Employee) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',       
      },
      body: JSON.stringify(data),
    })
  }

  const onChange = ({ target }: any) => {
    console.log(target.id)
    console.log(target.value)
    setEmpRecord({ ...employeeRecord, [target.id]: target.value })

    console.log({ employeeRecord })
  }

  const onSubmitForm = (event: any) => {
    event.preventDefault()
    editEmployeeRecord(`${employeeRecord?.id}`, employeeRecord)
  }

  const onGenderSelect = ({ target }: any) => {
    setEmpRecord({ ...employeeRecord, gender: target.value })
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          pl: 8,
          pt: 4,
        }}
      >
        <Typography
          variant='h4'
          color='primary.dark'
          sx={{ textTransform: 'capitalize' }}
        >
          {isEdit ? 'Edit' : 'Add'} Employee{' '}
        </Typography>
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
            // error={errorMesseges?.firstName.length!==0}
            sx={{ width: '60%' }}
            required
            id='firstname'
            label='First name'
            variant='standard'
            defaultValue={employeeRecord?.firstname}
            // helperText={errorMesseges?.firstName}
            onChange={(e) => onChange(e)}
          />
          <TextField
            sx={{ width: '60%' }}
            required
            id='lastname'
            label='Last Name'
            variant='standard'
            defaultValue={employeeRecord?.lastname}
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='email'
            label='Email'
            variant='standard'
            defaultValue={employeeRecord?.email}
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='number'
            label='Phone'
            variant='standard'
            defaultValue={employeeRecord?.number}
          />
          <FormControl variant='standard' sx={{ m: 1, width: '60%' }}>
            <InputLabel id='gender-select-label'>Select a gender</InputLabel>
            <Select
              id='gender'
              labelId='gender-select-label'
              value={employeeRecord?.gender}
              onChange={(e) => onGenderSelect(e)}
              label='Select a gender'
            >
              <MenuItem id='gender' value={'M'}>
                Male
              </MenuItem>
              <MenuItem id='gender' value={'F'}>
                Female
              </MenuItem>
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
            <Button variant='contained' onClick={(e) => onSubmitForm(e)}>
              Update Record
            </Button>
            {/* onClick={()=>dispatch(decrement())} */}
            <Button variant='outlined'>Cancel</Button>
          </Box>
          {/* </Grid>
  </Grid> */}
        </Box>
      </Box>
    </>
  )
}

export default FormTemplate

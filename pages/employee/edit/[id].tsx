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

import {
  Employee
} from '../../../src/types/employeeDataTypes'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../../src/slices/employee'
import Typography from '@mui/material/Typography'



// import updateRecord, { testMethod } from '../../.././src/slices/employee'
// import{RootState} from '../../../src/store/store'

// import { useSelector, useDispatch } from 'react-redux'

// export const getStaticPaths = async () => {
//   const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//   })

//   const data = await result.json()
//   console.log('data prints',data)

//   const paths = data.map((item: any) => {
//     return {
//       params: item.id.toString(),
//     }
//   })

//   return {
//     paths,
//     fallback:false
//   }
// }


// export const getStaticProps = async (context:any) =>{
// const id = context.params.id

// }

const EditEmployeeRecord = () => {
  const [gender, setGender] = useState('Select gender')
  const [fieldError, setFieldError] = useState(false)

const router = useRouter()

const{id} = router.query

const employeeArray = (useSelector(selectEmployees)).employees.map(empItem=>empItem as Employee)

const empRecord = employeeArray.find((employee)=> employee.id == id)

console.log({empRecord})
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  useEffect(() => {}, [])

  const editEmployeeRecord = async (data: Employee, id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <Box>
     <Box
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
          Edit Employee</Typography>
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
            id='standard-basic'
            label='Employee Id'
            variant='standard'
            // helperText={errorMesseges?.firstName}
            // onChange={(e) => setfirstName(e?.target.value)}
          />
          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Last Name'
            variant='standard'
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-basic'
            label='Email'
            variant='standard'
          />

          <TextField
            sx={{ width: '60%' }}
            required
            id='standard-required'
            label='Phone'
            variant='standard'
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
            <Button variant='contained' >Update Record</Button>
            {/* onClick={()=>dispatch(decrement())} */}
            <Button variant='outlined'>Cancel</Button>
          </Box>
          {/* </Grid>
        </Grid> */}
        </Box>
      </Box>
    </Box>
  )
}

export default EditEmployeeRecord

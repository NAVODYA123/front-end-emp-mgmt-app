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
import FormTemplate from '../../../src/components/commons/FormTemplate'

const EditEmployeeRecord = () => {
  // const [gender, setGender] = useState('Select gender')
  // const [fieldError, setFieldError] = useState(false)

const router = useRouter()

const{id} = router.query

const employeeArray = (useSelector(selectEmployees)).employees.map(empItem=>empItem as Employee)

const empRecord = employeeArray.find((employee)=> employee.id == id)


  return (
    <Box>
     <FormTemplate isEdit={true} employee={empRecord}/>
    </Box>
  )
}

export default EditEmployeeRecord

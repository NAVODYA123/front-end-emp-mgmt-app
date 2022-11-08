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
     <FormTemplate isEdit={true} employee={empRecord}/>
    </Box>
  )
}

export default EditEmployeeRecord

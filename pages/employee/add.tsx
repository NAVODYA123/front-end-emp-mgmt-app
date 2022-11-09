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
// import { addNewEmployeeRecord } from '../../services/restservices'
import {
  Employee,
  messegeTypes,
  FormData,
} from '../../src/types/employeeDataTypes'
import FormTemplate from '../../src/components/commons/FormTemplate'
import BackButton from '../../src/components/commons/buttons/BackButton'

const AddNewEmployee = () => {
  const [gender, setGender] = useState('F')
  const [firstname, setfirstName] = useState('')
  const [lastname, setlastName] = useState('')
  const [number, setPhone] = useState<number>(0)
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')

  const newEmployeeObj: Employee = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    gender: 'M',
    photo: '',
  }

  const { validationStatus, errorMesseges, fieldValues, validateFormData } =
    useFormValidateHook()

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
      <FormTemplate isEdit={false} employee={newEmployeeObj} />
      <BackButton navigationLink={'/employee/list'} />
    </Box>
  )
}

export default AddNewEmployee

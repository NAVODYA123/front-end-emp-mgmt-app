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
import { ChangeEvent, useState } from 'react'
import { addNewEmployeeRecord } from '../../../services/addNewEmployeeRecord'
import { editEmployeeRecord } from '../../../services/editEmployeeRecord'
import { Employee } from '../../types/employeeDataTypes'
import Link from 'next/link'
import useValidations from '../../hooks/useValidations'

type Props = {
  isEdit: boolean
  employee: Employee
}

const FormTemplate = ({ isEdit, employee }: Props) => {
  const [employeeRecord, setEmpRecord] = useState(employee)
  const { validationStatus, errorMesseges, errorStatus, validateFormData } =
    useValidations()

  const onChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmpRecord({ ...employeeRecord, [target.id]: target.value })
  }

  const onSubmitForm = (event: any) => {
    event.preventDefault()
    editEmployeeRecord(`${employeeRecord?.id}`, employeeRecord)
  }

  const onGenderSelect = ({ target }: any) => {
    setEmpRecord({ ...employeeRecord, gender: target.value })
  }

  const addNewRecord = async () => {
    validateFormData({ ...employeeRecord })

    if (validationStatus) {
      await addNewEmployeeRecord(employeeRecord)
    }
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
          <Button
            variant='outlined'
            component='label'
            sx={{ height: '120px', width: '120px', borderRadius: '50%' }}
          >
            <Avatar
              alt='Click to add photo'
              src={isEdit ? employeeRecord?.photo : ''}
              sx={{ width: 100, height: 100 }}
              variant='circular'
            />
            <input hidden accept='image/*' multiple type='file' />
          </Button>

          <TextField
            error={!errorStatus?.firstname}
            sx={{ width: '60%' }}
            required
            id='firstname'
            label='First name'
            variant='standard'
            helperText={errorMesseges?.firstname}
            defaultValue={employeeRecord?.firstname}
            onChange={(e) => onChange(e)}
          />
          <TextField
            error={!errorStatus?.lastname}
            sx={{ width: '60%' }}
            required
            id='lastname'
            label='Last Name'
            variant='standard'
            helperText={errorMesseges?.lastname}
            defaultValue={employeeRecord?.lastname}
            onChange={(e) => onChange(e)}
          />

          <TextField
            error={!errorStatus?.email}
            sx={{ width: '60%' }}
            required
            id='email'
            label='Email'
            variant='standard'
            helperText={errorMesseges?.email}
            defaultValue={employeeRecord?.email}
            onChange={(e) => onChange(e)}
          />

          <TextField
            error={!errorStatus?.number}
            sx={{ width: '60%' }}
            required
            id='number'
            label='Phone'
            variant='standard'
            helperText={errorMesseges?.number}
            defaultValue={employeeRecord?.number}
            onChange={(e) => onChange(e)}
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
            <Button
              variant='contained'
              onClick={(e) => (isEdit ? onSubmitForm(e) : addNewRecord())}
            >
              {isEdit ? 'Update' : 'Add'} Record
            </Button>
            <Link href={'/employee/list'} passHref>
              <Button variant='outlined'>Cancel</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FormTemplate

import Box from '@mui/material/Box'
import { Employee } from '../../src/types/employeeDataTypes'
import FormTemplate from '../../src/components/commons/FormTemplate'
import BackButton from '../../src/components/commons/buttons/BackButton'

const AddNewEmployee = () => {
  const newEmployeeObj: Employee = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    gender: 'M',
    photo: '',
  }

  return (
    <Box>
      <FormTemplate isEdit={false} employee={newEmployeeObj} />
      <BackButton navigationLink={'/employee/list'} />
    </Box>
  )
}

export default AddNewEmployee

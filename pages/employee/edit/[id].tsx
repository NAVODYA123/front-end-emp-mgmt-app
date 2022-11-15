import Box from '@mui/material/Box'
import { Employee } from '../../../src/types/employeeDataTypes'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../../../src/store/slices/employee'
import FormTemplate from '../../../src/components/commons/FormTemplate'
import BackButton from '../../../src/components/commons/buttons/BackButton'

const EditEmployeeRecord = () => {
  const router = useRouter()

  const { id } = router.query

  const employeeArray = useSelector(selectEmployees).employees.map(
    (empItem) => empItem as Employee
  )

  const empIndex = employeeArray.findIndex((employee) => employee.id == id)

  return (
    <Box>
      <FormTemplate isEdit={true} employee={employeeArray[empIndex]} />
      <BackButton navigationLink={'/employee/list'} />
    </Box>
  )
}

export default EditEmployeeRecord

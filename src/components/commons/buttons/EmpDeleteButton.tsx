import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteEmplyeeRecord } from '../../../../services/deleteEmployeeRecord'
import { useEffect, useState } from 'react'

type Props = {
  empId: string
}

const EmpDeleteButton = ({ empId }: Props) => {
  const [employeeID, setEmployeeId] = useState('')

  useEffect(() => {
    setEmployeeId(empId)
  }, [])

  const handleDelete = async () => {
    await deleteEmplyeeRecord(empId)
    console.log('delete method called')
  }

  return (
    <>
      <IconButton onClick={handleDelete}>
        <DeleteIcon fontSize='medium' />
      </IconButton>
    </>
  )
}

export default EmpDeleteButton

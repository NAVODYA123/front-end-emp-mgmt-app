import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteEmplyeeRecord } from '../../../../services/deleteEmployeeRecord'
import { useEffect, useState } from 'react'
import ConfirmDelete from '../ConfirmDeleteModal'

type Props = {
  empId: string
}

const EmpDeleteButton = ({ empId }: Props) => {
  const [employeeID, setEmployeeId] = useState('')
  const [openModal, setModalOpen] = useState(false)

  useEffect(() => {
    setEmployeeId(empId)
  }, [])

  const closeModal = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setModalOpen(false)
  }

  const handleDelete = async () => {
    await deleteEmplyeeRecord(empId)
  }

  const handleClickOpen = () => {
    setModalOpen(true)
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        {openModal && (
          <ConfirmDelete
            handleDelete={handleDelete}
            modalOpenStatus={openModal}
            handleClose={closeModal}
          />
        )}
        <DeleteIcon fontSize='medium' />
      </IconButton>
    </>
  )
}

export default EmpDeleteButton

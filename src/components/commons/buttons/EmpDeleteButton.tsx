import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteEmplyeeRecord } from '../../../services/deleteEmployeeRecord'
import { useEffect, useState } from 'react'
import ConfirmDelete from '../ConfirmDeleteModal'
import Router, { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar'
import { useDispatch } from 'react-redux'
import { setLoadingState } from '../../../store/slices/employee'

type Props = {
  empId: string,
  populateEmployeeList:Function
}

const EmpDeleteButton = ({ empId, populateEmployeeList}: Props) => {
  const [openModal, setModalOpen] = useState(false)
  const [snackBar, setSnackbar] = useState({ open: false, messege: '' })

  const dispatch = useDispatch()

  const router = useRouter()
  const closeModal = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setModalOpen(false)
  }

  const handleDelete = async () => {
    dispatch(setLoadingState(true))
    await deleteEmplyeeRecord(empId)
      .then(() => {
        setSnackbar({
          open: true,
          messege: 'Successfully deleted',
        })
        populateEmployeeList()
        dispatch(setLoadingState(false))
        router.push('/employee/list')
      })
      .catch((err) => {
        setSnackbar({
          open: true,
          messege: 'An error occured while deleteing Record',
        })
        dispatch(setLoadingState(false))
      })
    setModalOpen(false)
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
      <Snackbar
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={()=> setSnackbar({open: false, messege:''})}
        message={snackBar.messege}
      />
    </>
  )
}

export default EmpDeleteButton

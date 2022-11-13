import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type ButtonProps = {
  handleDelete: (event: any) => void
  modalOpenStatus: boolean
  handleClose: (e: any) => void
}

const ConfirmDelete = ({
  handleDelete,
  modalOpenStatus,
  handleClose,
}: ButtonProps) => {
  return (
    <div>
      <Dialog
        open={modalOpenStatus}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Confirm delete?'}</DialogTitle>
        <DialogContent>
          
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this record ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirm and Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmDelete

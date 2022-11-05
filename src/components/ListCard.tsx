import type { Employee } from '../types/employeedatatypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import DeleteIcon from '@mui/icons-material/Delete'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
// import Paper from '@mui/material/Paper';
// import { MarginRounded } from '@mui/icons-material'
import { shadows } from '@mui/system'

const ListCard = ({ empData }: Props) => {
  return (
    <Box
      sx={{
        width: '90%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: '8px',
        border: '1px solid grey',
        boxShadow: 3,
        alignItems: 'center'
      }}
    >
      <Box sx={{ width: '10%' }}>
        {' '}
        <Avatar alt={empData.photo} src={empData.photo} />
      </Box>
      {/* <div>{empData.photo}</div> */}
      <Box sx={{ width: '10%' }}>{empData.firstname}</Box>
      <Box sx={{ width: '10%' }}>{empData.lastname}</Box>
      <Box sx={{ width: '30%' }}>{empData.email}</Box>
      <Box sx={{ width: '10%' }}>{empData.gender}</Box>
      <Box sx={{ width: '10%' }}>
        <DeleteIcon />
        <EditRoundedIcon />
      </Box>
    </Box>
  )
}

export default ListCard

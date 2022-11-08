import type { Employee } from '../types/employeeDataTypes'
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
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'

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
        boxShadow: 2,
        alignItems: 'center',
        '&:hover':{
          boxShadow: 8,
        }
      }}
    >
      <Box sx={{ width: '10%' }}>
        {' '}
        <Avatar alt={empData.photo} src={empData.photo} />
      </Box>
      {/* <div>{empData.photo}</div> */}
      <Box sx={{ width: '10%' }}>{empData.firstname}</Box>
      <Box sx={{ width: '10%' }}>{empData.lastname}</Box>
      <Box sx={{ width: '20%' }}>{empData.email}</Box>
      <Box sx={{ width: '10%' }}>{empData.number}</Box>
      <Box sx={{ width: '10%' }}>{empData.gender ==='M' ? 'Male' : 'Female'}</Box>
      <Box sx={{ width: '10%' }}>

      <IconButton>
        <DeleteIcon fontSize="medium"/>
        </IconButton>
        <Link href={"/employee/edit/"+ empData.id} passHref >
        <IconButton >
        <EditRoundedIcon fontSize="medium"/>
        </IconButton>
        </Link>
      </Box>
    </Box>
  )
}

export default ListCard

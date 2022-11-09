import type { Employee } from '../types/employeeDataTypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import DeleteIcon from '@mui/icons-material/Delete'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import { shadows } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import EmpEditButton from './commons/buttons/EmpEditButton'
import EmpDeleteButton from './commons/buttons/EmpDeleteButton'

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
        '&:hover': {
          boxShadow: 8,
        },
      }}
    >
      <Box sx={{ width: '10%' }}>
        {' '}
        <Avatar alt={empData.photo} src={empData.photo} />
      </Box>      
      <Box sx={{ width: '10%' }}>{empData.firstname}</Box>
      <Box sx={{ width: '10%' }}>{empData.lastname}</Box>
      <Box sx={{ width: '20%' }}>{empData.email}</Box>
      <Box sx={{ width: '10%' }}>{empData.number}</Box>
      <Box sx={{ width: '10%' }}>
        {empData.gender === 'M' ? 'Male' : 'Female'}
      </Box>
      <Box sx={{ width: '10%' }}>      
        <EmpDeleteButton empId={empData.id} />
        <EmpEditButton empId={empData.id} />       
      </Box>
    </Box>
  )
}

export default ListCard

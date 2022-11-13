import type { Employee } from '../types/employeeDataTypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
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
      <Box sx={{ width: '10%',overflow:'hidden',textOverflow:'ellipsis' }}>{empData.firstname}</Box>
      <Box sx={{ width: '10%',overflow:'hidden',textOverflow:'ellipsis' }}>{empData.lastname}</Box>
      <Box sx={{ width: '20%', maxWidth:'20%',overflow:'hidden',textOverflow:'ellipsis' }}>{empData.email}</Box>
      <Box sx={{ width: '10%', overflow:'hidden',textOverflow:'ellipsis' }}>{empData.number}</Box>
      <Box sx={{ width: '10%',overflow:'hidden',textOverflow:'ellipsis' }}>
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

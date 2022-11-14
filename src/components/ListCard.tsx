import type { EmployeeCardProps } from '../types/employeeDataTypes'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import EmpEditButton from './commons/buttons/EmpEditButton'
import EmpDeleteButton from './commons/buttons/EmpDeleteButton'


const ListCard = ({ empData,populateEmployeeList }: EmployeeCardProps) => {
  return (
    <Box
      sx={{
        width: '90%',
        height: 80,
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
        <Avatar
          alt={empData.photo}
          src={empData.photo}
          sx={{ width: 56, height: 56 }}
        />
      </Box>
      <Box sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {empData.firstname}
      </Box>
      <Box sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {empData.lastname}
      </Box>
      <Box
        sx={{
          width: '20%',
          maxWidth: '20%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {empData.email}
      </Box>
      <Box sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {empData.number}
      </Box>
      <Box sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {empData.gender === 'M' ? 'Male' : 'Female'}
      </Box>
      <Box sx={{ width: '10%' }}>
        <EmpDeleteButton populateEmployeeList={populateEmployeeList} empId={empData.id} />
        <EmpEditButton empId={empData.id} />
      </Box>
    </Box>
  )
}

export default ListCard

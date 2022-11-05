import type { Employee } from '../types/employeedatatypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'

const ListCard = ({ empData }: Props) => {
  return (
    <div>
      <Box>
        <div>{empData.photo}</div>
        <div>{empData.firstname}</div>
        <div>{empData.lastname}</div>
        <div>{empData.email}</div>
        <div>{empData.photo}</div>
        <div>{empData.gender}</div>
        <div>Actions</div>
      </Box>
    </div>
  )
}

export default ListCard

import IconButton from '@mui/material/IconButton'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import Link from 'next/link'
import { Employee } from '../../../types/employeeDataTypes'

type Props = {
  empId: string
}
const EmpEditButton = ({ empId }: Props) => {
  return (
    <>
      <Link href={'/employee/edit/' + empId} passHref>
        <IconButton>
          <EditRoundedIcon fontSize='medium' />
        </IconButton>
      </Link>
    </>
  )
}

export default EmpEditButton

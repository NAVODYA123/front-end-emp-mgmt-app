import { useEffect, useState } from 'react'
import { displayAllEmployees } from '../../services/restServices'
import { Employee } from '../../src/types/employeeDataTypes'
import ListCard from '../../src/components/ListCard'
import GridCard from '../../src/components/GridCard'
import IconButton from '@mui/material/IconButton'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Unstable_Grid2'
import ConditionalWrapper from '../../src/components/ConditionalWrapper'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { populateData, selectEmployees } from '../../src/slices/employee'

const ViewEmployee = () => {
  const [toggleList, setToggleList] = useState(true)
  const dispatch = useDispatch()
  const employeeArray = useSelector(selectEmployees).employees.map(
    (empItem) => empItem as Employee
  )
  const getAllEmployees = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data: Employee[] | any) => {
        // setEmpDataArr(data)
        dispatch(populateData(data))
      })
  }
  useEffect(() => {
    getAllEmployees()
  }, [])
  // console.log('employee', employeeDataArr)
  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            pl: 8,
            pt: 4,
          }}
        >
          {' '}
          <Typography
            variant='h4'
            color='primary.dark'
            sx={{ textTransform: 'capitalize' }}
          >
            All Employees
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            pr: 8,
          }}
        >
          <Link href='/employee/add' passHref>
            <Fab color='primary' aria-label='add'>
              <AddIcon />
            </Fab>
          </Link>
        </Box>

        <Box
          sx={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={() => setToggleList(false)}>
            <GridViewIcon />
          </IconButton>
          <IconButton onClick={() => setToggleList(true)}>
            <ViewListIcon />
          </IconButton>
        </Box>

        <ConditionalWrapper condition={!toggleList}>
          {employeeArray?.map((emp: Employee) => {
            return toggleList ? (
              <Box
                key={emp.id}
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center !important',
                  mt: 2,
                  mb: 2,
                }}
              >
                <ListCard key={`emp-id-list-${emp.id}`} empData={emp} />
              </Box>
            ) : (
              <GridCard key={`emp-id-grid-${emp.id}`} empData={emp} />
            )
          })}
        </ConditionalWrapper>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center !important',
          }}
        >
          <Pagination count={5} size='large' color='primary' />
        </Box>
      </Box>
    </>
  )
}

export default ViewEmployee

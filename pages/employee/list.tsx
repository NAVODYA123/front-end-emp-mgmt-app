import { ChangeEvent, useEffect, useState } from 'react'
// import { displayAllEmployees } from '../../services/restServices'
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
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { populateData, selectEmployees } from '../../src/slices/employee'
import BackButton from '../../src/components/commons/buttons/BackButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import sortEmployeeArray from '../../src/utils/sortEmployeeArray'
import Stack from '@mui/material/Stack'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { getEmps } from '../../services/restServices'

const ViewEmployee = () => {
  const [toggleList, setToggleList] = useState(true)
  const [colName, setSortColumn] = useState('lastname')
  const [sortOrder, setSortOrder] = useState(false)

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
        dispatch(populateData(data))
      }) 
          
  }
  useEffect(() => {
    getAllEmployees()
  }, [])

  let sortedEmpArray: Employee[] =employeeArray
  const handleChange = (event: SelectChangeEvent) => {
    setSortColumn(event.target.value as string)
    sortedEmpArray= sortEmployeeArray(employeeArray, colName,sortOrder)
    dispatch(populateData(sortedEmpArray))
  }

  const handleSort = () => {
    setSortOrder(!sortOrder)
    sortedEmpArray=sortEmployeeArray(employeeArray, colName,sortOrder)
    dispatch(populateData(sortedEmpArray))
    
  }

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
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <Stack direction='row' spacing={1} alignItems='center'>
              <Typography>Z-A</Typography>
              <Switch              
                onChange={handleSort}
              />
              <Typography>A-Z</Typography>
            </Stack>

            <FormControl>
              <InputLabel id='sort-column-name'>Column Name</InputLabel>
              <Select          
                labelId='sort-column-name'
                id='sort-column-name'
                value={colName}
                label='colName'
                onChange={handleChange}
              >
                <MenuItem value={'firstname'}>First Name</MenuItem>
                <MenuItem value={'lastname'}>Last Name</MenuItem>
                <MenuItem value={'number'}>Phone</MenuItem>
                <MenuItem value={'id'}>Id</MenuItem>
                <MenuItem value={'email'}>Email</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={() => setToggleList(false)}>
              <GridViewIcon />
            </IconButton>
            <IconButton onClick={() => setToggleList(true)}>
              <ViewListIcon />
            </IconButton>
          </Box>
        </Box>

        <ConditionalWrapper condition={!toggleList}>
          {sortedEmpArray?.map((emp: Employee) => {
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
        ></Box>
        <BackButton navigationLink={'/'} />
      </Box>
    </>
  )
}

export default ViewEmployee

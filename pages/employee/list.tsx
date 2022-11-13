import { useEffect, useState } from 'react'
import { Employee } from '../../src/types/employeeDataTypes'
import ListCard from '../../src/components/ListCard'
import GridCard from '../../src/components/GridCard'
import IconButton from '@mui/material/IconButton'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import Box from '@mui/material/Box'
import ConditionalWrapper from '../../src/components/ConditionalWrapper'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import {
  applySearchAndSort,
  populateData,
  selectEmployees,
} from '../../src/slices/employee'
import BackButton from '../../src/components/commons/buttons/BackButton'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import sortEmployeeArray from '../../src/utils/sortEmployeeArray'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import { TextField } from '@mui/material'
import searchEmployeeArray from '../../src/utils/searchEmployeeArray'

const ViewEmployee = () => {
  const [toggleList, setToggleList] = useState(true)
  const [colName, setSortColumn] = useState('lastname')
  const [sortOrder, setSortOrder] = useState(false)

  const dispatch = useDispatch()
  const employeeArray = useSelector(selectEmployees).employees.map(
    (empItem) => empItem as Employee
  )

  const sortedArray = useSelector(selectEmployees).sortedEmpArray.map(
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
        dispatch(
          applySearchAndSort(sortEmployeeArray(data, colName, sortOrder))
        )
      })
  }
  useEffect(() => {
    getAllEmployees()
  }, [])

  const handleChange = (event: SelectChangeEvent) => {
    setSortColumn(event.target.value as string)
    const sortedResult = sortEmployeeArray(
      sortedArray,
      event.target.value,
      sortOrder
    )
    dispatch(applySearchAndSort(sortedResult))
  }

  const handleSort = () => {
    const sortedResult = sortEmployeeArray(sortedArray, colName, !sortOrder)
    dispatch(applySearchAndSort(sortedResult))
    setSortOrder(!sortOrder)
  }

  const handleSearch = ({ target }: any) => {
    let sortVal = String(target.value).toLocaleLowerCase()
    let result = searchEmployeeArray(employeeArray, sortVal)
    result = sortEmployeeArray(result, colName, sortOrder)
    dispatch(applySearchAndSort(result))
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
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '60%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                id='standard-search'
                label='Search field'
                type='search'
                variant='outlined'
                onChange={(e) => handleSearch(e)}
                sx={{ width: '60%' }}
              />
              <FormControl>
                <Select
                  labelId='sort-column-name'
                  id='sort-column-name'
                  value={colName}
                  onChange={handleChange}
                  sx={{ width: '150px' }}
                >
                  <MenuItem value={'firstname'}>First Name</MenuItem>
                  <MenuItem value={'lastname'}>Last Name</MenuItem>
                  <MenuItem value={'number'}>Phone</MenuItem>
                  <MenuItem value={'email'}>Email</MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  minWidth: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Typography>Z-A</Typography>
                  <Switch checked={sortOrder} onChange={handleSort} />
                  <Typography>A-Z</Typography>
                </Stack>
              </Box>
            </Box>
            <Box
              sx={{
                width: '10%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              <IconButton onClick={() => setToggleList(false)}>
                <GridViewIcon />
              </IconButton>
              <IconButton onClick={() => setToggleList(true)}>
                <ViewListIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <ConditionalWrapper condition={!toggleList}>
          {sortedArray?.map((emp: Employee) => {
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

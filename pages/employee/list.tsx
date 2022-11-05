import { useEffect, useState } from 'react'
import { displayAllEmployees } from '../../services/restservices'
import { Employee } from '../../src/types/employeedatatypes'
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

// type displayLayoutConditions = {
//   condition:boolean,
//   wrapper,
//   children
// }

const ViewEmployee = () => {
  const [employeeDataArr, setEmpDataArr] = useState<Employee[] | any>()
  const [toggleList, setToggleList] = useState(true)

  useEffect(() => {
    const getAllEmployees = async () => {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/employee`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
        .then((res) => res.json())
        .then((data: Employee[] | any) => {
          setEmpDataArr(data)
        })
    }
    getAllEmployees()

    // const dataFetched = fetchEmployees()
    // console.log('printed', dataFetched)
    // setEmpDataArr(dataFetched)
  }, [])
  console.log('employee', employeeDataArr)
  // const fetchEmployees = async () => {
  //   const employees = await displayAllEmployees()
  //   return employees
  // }

  // const toggleView() => {
  //   setUserView()
  // }

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          view all employees page
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

        <ConditionalWrapper
          condition={toggleList}        
        >
        {employeeDataArr?.map((emp: Employee) => {
          return toggleList ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center !important',
                mt: 1,
                mb: 1,
              }}
            >
              <ListCard key={emp.id} empData={emp} />
            </Box>
          ) : (           
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              >
                 <Grid md={3}>
                <GridCard key={emp.id} empData={emp} />
                </Grid>
              </Grid>
         
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

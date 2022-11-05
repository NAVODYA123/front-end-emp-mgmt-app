import { useEffect, useState } from 'react'
import { displayAllEmployees } from '../../services/restservices'
import { Employee } from '../../src/types/employeedatatypes'
import ListCard from '../../src/components/ListCard'

const ViewEmployee = () => {
  const [employeeDataArr, setEmpDataArr] = useState<Employee[] | any>()

  useEffect(() => {

    const getAllEmployees = async () => {
     const result = await  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then((res)=> res.json()).then((data:Employee[]|any)=> {setEmpDataArr(data);})
    }   
    getAllEmployees()
   
    // const dataFetched = fetchEmployees()
    // console.log('printed', dataFetched)
    // setEmpDataArr(dataFetched)
  },[])
  console.log('employee', employeeDataArr)
  // const fetchEmployees = async () => {
  //   const employees = await displayAllEmployees()
  //   return employees
  // }

  // console.log('employeeDataArr', employeeDataArr)

  return (
    <>
      <div>
        view all employees page
        {employeeDataArr?.map((emp: Employee) => {
          return <ListCard key={emp.id} empData={emp} />
        })}
      </div>
    </>
  )
}

export default ViewEmployee

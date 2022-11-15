import { Employee } from '../types/employeeDataTypes'

//// handle search employee 
const searchEmployeeArray = (empArray: Employee[], fieldValue: string) => {
  return empArray.filter(
    (val) =>
      val.email.toLowerCase().includes(fieldValue) ||
      val.firstname.toLowerCase().includes(fieldValue) ||
      val.lastname.toLowerCase().includes(fieldValue)
  )
}
export default searchEmployeeArray

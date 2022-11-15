import { Employee } from '../types/employeeDataTypes'

//// add new employee record
export const addNewEmployeeRecord = async (fieldValues: Employee):Promise<any> => {    
   return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(fieldValues),
    })
  }
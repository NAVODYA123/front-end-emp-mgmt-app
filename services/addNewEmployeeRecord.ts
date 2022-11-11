import { Employee, FormData } from '../src/types/employeeDataTypes'

export const addNewEmployeeRecord = async (fieldValues: Employee) => {    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(fieldValues),
    })
  }
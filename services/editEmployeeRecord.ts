import { Employee, FormData } from '../src/types/employeeDataTypes'

//edit employee record
export const editEmployeeRecord = async (id: string, data?: Employee, ) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
  }
import { Employee } from '../types/employeeDataTypes'

//// edit employee record
export const editEmployeeRecord = async (id: string, data?: Employee, ):Promise<any> => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
  }
import { Employee, FormData } from '../src/types/employeeDataTypes'


//fetch employee by id
export const getEmployeeById = async (id: number)=>{
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((res)=> res.json())
    .then((data)=> {
      console.log('data',data[0]); return JSON.stringify(data)})   
}

//fetch employee by firstname
export const getEmployeeFirstName = async (fieldId: string)=>{
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${fieldId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((res)=> res.json())
    .then((data)=> {
      console.log('data',data[0]); return JSON.stringify(data)})   
}



import { Employee, FormData } from '../src/types/employeeDataTypes'

// export const addNewEmployeeRecord = async (fieldValues?: FormData) => {    
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//     body: JSON.stringify(fieldValues),
//   })
// }

export const getEmps = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data: Employee[] | any) => {
      return data
      // dispatch(populateData(data))
    })

    // console.log('result',result)
    return result
}

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


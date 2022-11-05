import { Employee } from '../src/types/employeedatatypes'

// get all the employees
export const displayAllEmployees = async () => {
  // console.log('fetch reached')
  // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // }).then((res)=> res.json()).then((data)=> {console.log('data',data[0]); return JSON.stringify(data)})
  //   console.log('res body',res.status)
  // return await res.json()

}

//edit employee record
export const editEmployeeRecord = async (data: Employee, id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  })
}

//add new employee record
export const addNewEmployeeRecord = async (data: Employee) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  })
}

//delete selected employee record
export const deleteEmplyeeRecord = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(id),
  })
}

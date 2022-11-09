import { Employee } from '../types/employeeDataTypes'

const sortEmployeeArray = (
  objArray: Employee[],
  Objproperty: String | number
) => {
  let SortedArray = new Array()
  switch (Objproperty) {
    case 'email':
      {
        SortedArray = objArray.sort((a, b) => {
          let x = a.email.toLowerCase()
          let y = b.email.toLowerCase()
          return x > y ? 1 : x < y ? -1 : 0
        })
      }
      break
    case 'firstname':
      {
        SortedArray = objArray.sort((a, b) => {
          let x = a.firstname.toLowerCase()
          let y = b.firstname.toLowerCase()

          return x > y ? 1 : x < y ? -1 : 0
        })
      }
      break
    case 'lastname':
      {
        return (SortedArray = objArray.sort((a, b) => {
          let x = a.lastname.toLowerCase()
          let y = b.lastname.toLowerCase()

          return x > y ? 1 : x < y ? -1 : 0
        }))
      }
      break
    case 'id':
      {
        SortedArray = objArray.sort((a, b) => {
          let x = Number(a.id)
          let y = Number(b.id)
          return x > y ? 1 : x < y ? -1 : 0
        })
      }
      break
    case 'number': {
      SortedArray = objArray.sort((a, b) => {
        let x = Number(a.number)
        let y = Number(b.number)

        return x > y ? 1 : x < y ? -1 : 0
      })
    }
    default: {
      SortedArray
    }
  }
  return SortedArray
}

export default sortEmployeeArray

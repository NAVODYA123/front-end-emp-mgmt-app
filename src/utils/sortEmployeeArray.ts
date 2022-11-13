import { Employee } from '../types/employeeDataTypes'

const sortEmployeeArray = (
  objArray: Employee[],
  Objproperty: String | number,
  sortOrder: boolean
) => {
  let SortedArray = new Array()
  switch (Objproperty) {
    case 'email':
      {
        SortedArray = [...objArray].sort((a, b) => {
          let x = a.email.toLowerCase()
          let y = b.email.toLowerCase()
          let result: number = sortOrder
            ? x > y
              ? 1
              : x < y
                ? -1
                : 0
            : x < y
              ? 1
              : x > y
                ? -1
                : 0
          return result
        })
      }
      break
    case 'firstname':
      {
        SortedArray = [...objArray].sort((a, b) => {
          let x = a.firstname.toLowerCase()
          let y = b.firstname.toLowerCase()
          let result: number = sortOrder
            ? x > y
              ? 1
              : x < y
                ? -1
                : 0
            : x < y
              ? 1
              : x > y
                ? -1
                : 0
          return result
        })
      }
      break
    case 'lastname':
      {
        SortedArray = [...objArray].sort((a, b) => {
          let x = a.lastname.toLowerCase()
          let y = b.lastname.toLowerCase()
          let result: number = sortOrder
            ? x > y
              ? 1
              : x < y
                ? -1
                : 0
            : x < y
              ? 1
              : x > y
                ? -1
                : 0
          return result
        })
      }
      break
    case 'number': {
      SortedArray = [...objArray].sort((a, b) => {
        let x = Number(a.number)
        let y = Number(b.number)
        let result: number = sortOrder
          ? x > y
            ? 1
            : x < y
              ? -1
              : 0
          : x < y
            ? 1
            : x > y
              ? -1
              : 0
        return result
      })
    }
    default: {
      SortedArray
    }
  }
  return SortedArray
}

export default sortEmployeeArray

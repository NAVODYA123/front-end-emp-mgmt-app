export type Employee = {
  id: string
  firstname: string
  lastname: string
  email: string
  number: number | string
  gender: string
  photo: string
}

// export type formEntry = {
//   name: string
//   value: string | number
// }

export type FormData = {
  firstname: string,
  lastname: string,
  gender: string,
  number: number,
  email: string,
}

export type FormEntry = {
  firstname: string
  lastname: string
  email: string
  number: string
  gender: string  
}

export type messegeTypes = {
  firstname: string,
  lastname: string,
  number: string,
  email: string,
}


export type ValidationData = {
  validationStatus:boolean,
  errorMesseges?: messegeTypes,
  fieldValues?: FormData,
  validateFormData: Function
  
}
export type Employee = {
  id: string
  firstname: string
  lastname: string
  email: string
  number: number | string
  gender: string
  photo: string
}

export type formEntry = {
  name: string
  value: string | number
}

export type FormData = {
  firstName: string,
  lastName: string,
  gender: string,
  phone: number,
  email: string,
}

export type messegeTypes = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
}


export type ValidationData = {
  validationStatus:boolean,
  errorMesseges?: messegeTypes,
  fieldValues?: FormData,
  validateFormData: Function
  
}
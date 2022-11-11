export type Employee = {
  id: string
  firstname: string
  lastname: string
  email: string
  number: number | string
  gender: string
  photo: string
}

export type FormData = {
  firstname: string,
  lastname: string,
  gender: string,
  number: string,
  email: string,
  photo: string
}

export type MessegeTypes = {
  firstname: string,
  lastname: string,
  number: string,
  email: string  
}


export type ValidationData = {
  validationStatus:boolean,
  errorMesseges: MessegeTypes,
  errorStatus:ErrorStatusType, 
  validateFormData: Function  
}

export type ErrorStatusType = {
  firstname: boolean,
  lastname: boolean,
  number: boolean,
  email: boolean 
}
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
  email: string  
}


export type ValidationData = {
  validationStatus:boolean,
  errorMesseges?: messegeTypes,
  errorStatus?:ErrorStatusType,
  fieldValues?: FormData,
  validateFormData: Function  
}

export type ErrorStatusType = {
  firstname: boolean,
  lastname: boolean,
  number: boolean,
  email: boolean 
}
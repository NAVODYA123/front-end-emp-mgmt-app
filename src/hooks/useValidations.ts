import {
  isAlpha,
  isEmail,
  isMobilePhone,
  isNotEmpty,
  maxLength,
  minLength,
} from 'class-validator'
import { useState } from 'react'

import {
  ErrorStatusType,
  ValidationData,
  FormData,
  MessegeTypes,
} from '../types/employeeDataTypes'

//// validation hook
const useValidations = (): ValidationData => {
  const [errorMesseges, setErrorMesseges] = useState<MessegeTypes>({
    firstname: '',
    lastname: '',
    number: '',
    email: '',
  })

  const [validationStatus, setValidationStaus] = useState(false)
  const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
    firstname: true,
    lastname: true,
    number: true,
    email: true,
  })

  //// validate phone number
  const validatePhone = (number: string) => {
    const valid = isMobilePhone(number, 'si-LK')
    const message = valid
      ? ''
      : 'Invalid phone number. Number should be in the format +94XXXXXXXXXX'
    return { valid, message }
  }

  //// validate email address
  const validateEmail = (emailData: string) => {
    const valid = isEmail(emailData)
    const message = valid ? '' : 'Invalid email address'
    return { valid, message }
  }

  //// validate first name and last name
  const validateName = (name: string) => {
    let messages = []
    let valid = true
    if (!isAlpha(name)) {
      messages.push('only letters are allowed')
      valid = false
    } else if (!isNotEmpty(name)) {
      messages.push('first name cannot be empty')
      valid = false
    } else if (!minLength(name, 6)) {
      messages.push('length of first name should be at least 6 characters')
      valid = false
    } else if (!maxLength(name, 10)) {
      messages.push(
        'length of first name should not be greater than 10 characters'
      )
      valid = false
    }
    return {
      message: messages.join(', '),
      valid,
    }
  }

  //// validate form data
  const validateFormData = (submittedData: FormData) => {
    const emailDataObject = validateEmail(submittedData.email)
    const firstNameDataObject = validateName(submittedData.firstname)
    const lastNameDataObject = validateName(submittedData.lastname)
    const phoneDataObject = validatePhone(submittedData.number)
    const validationState =
      phoneDataObject.valid &&
      firstNameDataObject.valid &&
      lastNameDataObject.valid &&
      emailDataObject.valid
      
   
    setErrorMesseges({
      firstname: firstNameDataObject.message,
      lastname: lastNameDataObject.message,
      number: phoneDataObject.message,
      email: emailDataObject.message,
    })

    setErrorStatus({
      firstname: firstNameDataObject.valid,
      lastname: lastNameDataObject.valid,
      number: phoneDataObject.valid,
      email: emailDataObject.valid,
    })  
    
    return validationState
  }

  return {
    errorMesseges,
    errorStatus,
    validateFormData,
  }
}

export default useValidations

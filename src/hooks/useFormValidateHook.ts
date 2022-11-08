import { useState } from 'react'
import {
  ErrorStatusType,
  FormData,
  messegeTypes,
  ValidationData,
} from '../types/employeeDataTypes'

const useFormValidateHook = (): ValidationData => {
  const [errorMesseges, setErrorMesseges] = useState<messegeTypes>()
  const [fieldValues, setFieldValue] = useState<FormData>()
  const [validationStatus, setValidationStaus] = useState(false)
  const [errorStatus, setErrorStatus] = useState<ErrorStatusType>()

  const validateEmail = (emailData: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: emailData, valid: true }
    ///validate email address
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    )
    if (typeof emailData !== 'string') {
      errorMessegeValue = 'only letters and @ are allowed'
    }

    // else if (regex.test(emailData)) {
    //   errorMessegeValue = 'invalid email. Please enter a valid email'
    // }
    else if (emailData.length === 0) {
      errorMessegeValue = 'Email name cannot be empty'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    console.log('regex.test(submittedData.email)', regex.test(emailData))
    returnObject.messege = errorMessegeValue
    return returnObject
  }

  const validateFirstName = (firstname: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: firstname, valid: false }
    ////first name
    if (typeof firstname !== 'string') {
      errorMessegeValue = 'only letters are allowed'
    } else if (firstname.length == 0) {
      errorMessegeValue = 'first name cannot be empty'
    } else if (firstname.length < 6) {
      errorMessegeValue = 'length of first name should be at least 6 characters'
    } else if (firstname.length > 10) {
      errorMessegeValue =
        'length of first name should not be greater than 10 characters'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    returnObject.messege = errorMessegeValue
    return returnObject
  }
  const validateLastName = (lastname: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: lastname, valid: false }
    if (typeof lastname !== 'string') {
      errorMessegeValue = 'only letters are allowed'
    } else if (lastname.length == 0) {
      errorMessegeValue = 'last name cannot be empty'
    } else if (lastname.length < 6) {
      errorMessegeValue = 'length of last name should be at least 6 characters'
    } else if (lastname.length > 10) {
      errorMessegeValue =
        'length of last name should not be greater than 10 characters'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    returnObject.messege = errorMessegeValue
    return returnObject
  }

  const validatePhone = (number: number) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: number, valid: false }

    if (typeof number !== 'number' || isNaN(number)) {
      errorMessegeValue =
        'only numbers are allowed. Phone number should be in the format +94XXXXXXX'
    } else if (String(number).length === 0) {
      errorMessegeValue = 'phone number cannot be empty'
    } else if (String(number).length !== 9) {
      errorMessegeValue =
        'A valid phone number should have 9 digits excluding the 0'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
      returnObject.fieldValue = Number(`+94${returnObject.fieldValue}`)
      console.log('returnObject.fieldValue', returnObject.fieldValue)
    }
    returnObject.messege = errorMessegeValue

    return returnObject
  }

  const validateFormData = async (submittedData: FormData) => {
    const emailDataObject = validateEmail(submittedData.email)
    const firstNameDataObject = validateFirstName(submittedData.firstname)
    const lastNameDataObject = validateLastName(submittedData.lastname)
    const PhoneDataObject = validatePhone(submittedData.number)
    const validationState =
      PhoneDataObject.valid &&
      firstNameDataObject.valid &&
      lastNameDataObject.valid &&
      emailDataObject.valid
    setValidationStaus(validationState)

    setErrorMesseges({
      ...errorMesseges,
      firstname: firstNameDataObject.messege,
      lastname: lastNameDataObject.messege,
      number: PhoneDataObject.messege,
      email: emailDataObject.messege,
    })

    setFieldValue({
      ...fieldValues,
      firstname: firstNameDataObject.fieldValue,
      lastname: lastNameDataObject.fieldValue,
      number: PhoneDataObject.fieldValue,
      email: emailDataObject.fieldValue,
      gender: `${fieldValues?.gender}`,
      photo: '',
    })

    setErrorStatus({
      ...errorStatus,
      firstname: firstNameDataObject.valid,
      lastname: lastNameDataObject.valid,
      number: PhoneDataObject.valid,
      email: emailDataObject.valid,
    })
  }

  return { validationStatus, errorMesseges, errorStatus, fieldValues, validateFormData  }
}

export default useFormValidateHook

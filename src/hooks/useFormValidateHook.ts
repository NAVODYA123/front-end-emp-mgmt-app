import { useState } from 'react'
import { FormData, messegeTypes, ValidationData } from '../types/employeeDataTypes'


const useFormValidateHook = (): ValidationData => {
  const [errorMesseges, setErrorMesseges] = useState<messegeTypes>()
  const [fieldValues, setFieldValue] = useState<FormData>()
  const [validationStatus, setValidationStaus] = useState(false)

  const validateEmail = (emailData: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: emailData, valid: true }
    ///validate email address
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    )
    if (typeof emailData !== 'string') {
      errorMessegeValue = 'only letters and @ are allowed'
    } else if (regex.test(emailData)) {
      errorMessegeValue = 'invalid email. Please enter a valid email'
    } else if (emailData.length === 0) {
      errorMessegeValue = 'Email name cannot be empty'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    console.log('regex.test(submittedData.email)', regex.test(emailData))
    returnObject.messege = errorMessegeValue
    return returnObject
  }

  const validateFirstName = (firstName: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: firstName, valid: false }
    ////first name
    if (typeof firstName !== 'string') {
      errorMessegeValue = 'only letters are allowed'
    } else if (firstName.length == 0) {
      errorMessegeValue = 'first name cannot be empty'
    } else if (firstName.length < 6) {
      errorMessegeValue = 'length of first name should be at least 6 characters'
    } else if (firstName.length > 10) {
      errorMessegeValue =
        'length of first name should not be greater than 10 characters'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    returnObject.messege = errorMessegeValue
    return returnObject
  }
  const validateLastName = (lastName: string) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: lastName, valid: false }
    if (typeof lastName !== 'string') {
      errorMessegeValue = 'only letters are allowed'
    } else if (lastName.length == 0) {
      errorMessegeValue = 'last name cannot be empty'
    } else if (lastName.length < 6) {
      errorMessegeValue = 'length of last name should be at least 6 characters'
    } else if (lastName.length > 10) {
      errorMessegeValue =
        'length of last name should not be greater than 10 characters'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    // console.log('errorMessegeValue',errorMessegeValue)
    returnObject.messege = errorMessegeValue
    return returnObject
  }

  const validatePhone = (phone: number) => {
    let errorMessegeValue = ''
    let returnObject = { messege: '', fieldValue: phone, valid: false }

    if (typeof phone !== 'number' || isNaN(phone)) {
      errorMessegeValue =
        'only numbers are allowed. Phone number should be in the format +94XXXXXXX'
    } else if (String(phone).length === 0) {
      errorMessegeValue = 'phone number cannot be empty'
    } else if (String(phone).length !== 9) {
      errorMessegeValue =
        'A valid phone number should have 9 digits excluding the 0'
    } else {
      errorMessegeValue = ''
      returnObject.valid = true
    }
    returnObject.messege = errorMessegeValue

    return returnObject
  }

  const validateFormData = async (submittedData: FormData) => {

    const emailDataObject = validateEmail(submittedData.email)
    const firstNameDataObject = validateFirstName(submittedData.firstName)
    const lastNameDataObject = validateLastName(submittedData.lastName)
    const PhoneDataObject = validatePhone(submittedData.phone)

    const validationState = (PhoneDataObject.valid) && (firstNameDataObject.valid) && (lastNameDataObject.valid) && (emailDataObject.valid)
    setValidationStaus(validationState)



    setErrorMesseges({
      ...errorMesseges,
      phone: PhoneDataObject.messege,
      firstName: firstNameDataObject.messege,
      lastName: lastNameDataObject.messege,
      email: emailDataObject.messege,
    })


    setFieldValue({
      ...fieldValues,
      phone: PhoneDataObject.fieldValue,
      firstName: firstNameDataObject.fieldValue,
      lastName: lastNameDataObject.fieldValue,
      email: emailDataObject.fieldValue,
      gender: `${fieldValues?.gender}`
    })


  }




  return { validationStatus,errorMesseges, fieldValues, validateFormData }

}

export default useFormValidateHook

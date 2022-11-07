import { useState } from 'react'
import { FormData } from '../types/employeeDataTypes'

const useFormValidateHook = () => {
  const [errorMesseges, setErrorMesseges] = useState({})
  // const [fieldValue, setFieldValue] = useState({})

  const validateEmail = (emailData: string) => {
    let errorMessegeValue = ''
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
    }
    console.log('regex.test(submittedData.email)', regex.test(emailData))
    return errorMessegeValue
  }

  const validateFirstName = (firstName: string) => {
    let errorMessegeValue = ''
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
    }

    return errorMessegeValue
  }
  const validateLastName = (lastName: string) => {
    let errorMessegeValue = ''

    ////last name
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
    }
    return errorMessegeValue
  }

  const validatePhone = (phone: number) => {
    let errorMessegeValue = ''

    if (typeof phone !== 'number' || isNaN(phone)) {
      errorMessegeValue =
        'only numbers are allowed. Phone number should be in the format +94XXXXXXX'
    } else if (String(phone).length === 0) {
      errorMessegeValue = 'phone number cannot be empty'
    } else if (String(phone).length !== 9) {
      errorMessegeValue =
        'A valid phone number should have 9 digits excepting the 0'
    } else {
      errorMessegeValue = ''
    }
    return errorMessegeValue
  }

  const validateFormData = (submittedData: FormData) => {
    const emailMessege = validateEmail(submittedData.email)
    const firstNameMessege = validateFirstName(submittedData.firstName)
    const lastNameMessege = validateLastName(submittedData.lastName)
    const PhoneMessege = validatePhone(submittedData.phone)

    setErrorMesseges({
      ...errorMesseges,
      phone: PhoneMessege,
      firstName: firstNameMessege,
      lastName: lastNameMessege,
      emailMessege: emailMessege,
    })

    console.log('errorMesseges', errorMesseges)
  }

  return { errorMesseges, validateFormData }
}

export default useFormValidateHook

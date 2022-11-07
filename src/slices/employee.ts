import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '../types/employeeDataTypes'

const initialState  = {
    // id: "",
    // firstname: "",
    // lastname: "",
    // email: "",
    // number: "" ,
    // gender: "",
    // photo: "",
}

const employeeSlice = createSlice({
    name: "employeeData",
    initialState,
    reducers: {}
})
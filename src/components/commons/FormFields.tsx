import TextField from "@mui/material/TextField"
import { Employee, ErrorStatusType, MessegeTypes } from "../../types/employeeDataTypes"

type Props ={ 
    errorStatus: boolean,
    errorMesseges: string,
    fieldValue: string,
    fieldId: string,
    onChange:(e:any)=> void
}


const FormField = ({errorStatus,errorMesseges,fieldValue,fieldId,onChange}:Props) => {

    return(
        <TextField
            error={errorStatus}
            sx={{ width: '60%' }}
            required
            id='firstname'
            label='First name'
            variant='standard'
            helperText={errorMesseges}
            defaultValue={fieldValue}
            onChange={(e) => onChange(e)}
          />
    )

}

export default FormField 
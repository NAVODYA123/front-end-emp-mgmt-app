import type { Employee } from '../types/employeedatatypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Grid from '@mui/material/Unstable_Grid2'



const GridCard = ({ empData }: Props) => {

  

return(
<Box sx={{ flexGrow: 1 }}>
{/* <Grid md={3}> */}
<Card sx={{}}>
<CardMedia
        component="img"
        height="194"
        image={empData.photo}
        alt={empData.photo}
      />
          {/* <Avatar alt={empData.photo} src={empData.photo} /> */}
        {/* <div>{empData.photo}</div> */}
        <div>{`${empData.firstname}${' '}${empData.lastname}`}</div>        
        <div>{empData.email}</div>       
        <div>{empData.gender}</div>
        <div><DeleteIcon/><EditRoundedIcon/></div>
      </Card>
      {/* </Grid> */}
      </Box>

)
}

export default GridCard
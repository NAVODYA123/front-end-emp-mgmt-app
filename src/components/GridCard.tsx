import type { Employee } from '../types/employeedatatypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import Grid from '@mui/material/Unstable_Grid2'
import Avatar from '@mui/material/Avatar'
import { borderRadius } from '@mui/system'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Tooltip from '@mui/material/Tooltip';

const GridCard = ({ empData }: Props) => {
  return (
    <Box sx={{ width: '20%' }}>
      <Grid>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: '16px',
            '&:hover': {
              boxShadow: 12,
            },
          }}
        >
          {/* <CardMedia
        component="img"
        height="250"
        image={empData.photo}
        alt={empData.photo}       
       
      /> */}
          <CardActions
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row !important',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={() => {}}>
              {/* <Fab color="info" aria-label="add" size='small'> */}
              <DeleteIcon />
              {/* </Fab> */}
            </IconButton>
            <IconButton>
              {/* <Fab color="info" aria-label="add" size='small'> */}
              <EditRoundedIcon />
              {/* </Fab> */}
            </IconButton>
          </CardActions>
          <Avatar
            alt={empData.photo}
            src={empData.photo}
            sx={{ height: '150px', width: '150px' }}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6' sx={{fontWeight: 'bold',}}>
              <div style={{}}>{`${empData.firstname}${' '}${
                empData.lastname
              }`}</div>
            </Typography>

            <Typography variant='body2'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MailOutlineRoundedIcon  fontSize='small' sx={{m:1}}/>
                <Tooltip title={empData.email} placement="right-end">
                <div
                  style={{
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                > 
                  {empData.email}
                  
                </div>
                </Tooltip>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <PhoneOutlinedIcon fontSize='small' sx={{m:1}} />
                <div>{empData.number}</div>
              </div>

              <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>{empData.gender === 'M' ? 'Male' : 'Female'}</div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default GridCard

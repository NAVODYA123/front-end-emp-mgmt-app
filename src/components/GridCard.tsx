import type { Employee } from '../types/employeeDataTypes'
type Props = {
  empData: Employee
}

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Unstable_Grid2'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import Tooltip from '@mui/material/Tooltip'
import EmpDeleteButton from './commons/buttons/EmpDeleteButton'
import EmpEditButton from './commons/buttons/EmpEditButton'

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
         <CardActions
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row !important',
              justifyContent: 'flex-end',
            }}
          >
            <EmpDeleteButton empId={empData.id} />
            <EmpEditButton empId={empData.id} />
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
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                <Box style={{}}>{`${empData.firstname}${' '}${
                  empData.lastname
                }`}</Box>
              </Typography>
            </Box>
            <Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MailOutlineRoundedIcon fontSize='small' sx={{ m: 1 }} />
                <Tooltip title={empData.email} placement='right-end'>
                  <Box
                    style={{
                      maxWidth: '150px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {empData.email}
                  </Box>
                </Tooltip>
              </Box>

              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <PhoneOutlinedIcon fontSize='small' sx={{ m: 1 }} />
                <Box>{empData.number}</Box>
              </Box>

              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                {empData.gender === 'M' ? 'Male' : 'Female'}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default GridCard

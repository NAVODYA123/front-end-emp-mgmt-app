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
import Collapse from '@mui/material/Collapse'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import { ThemeProvider } from '@mui/material/styles'
import EmpAppTheme from '../../styles/customTheme/EmpAppTheme'
import type { EmployeeCardProps } from '../types/employeeDataTypes'
import { useState } from 'react'

const GridCard = ({ empData, populateEmployeeList }: EmployeeCardProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <ThemeProvider theme={EmpAppTheme}>
      <Box sx={{ minWidth: '250px' }}>
        <Grid xs={8} md={12} sm={12}>
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
                height: '50px',
              }}
            >
              <IconButton onClick={() => setExpanded(!expanded)}>
                <MoreVertIcon />
              </IconButton>

              <Collapse
                in={expanded}
                timeout={100}
                unmountOnExit
                orientation={'vertical'}
              >
                <Box
                  sx={{
                    height: '50px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <EmpDeleteButton
                    populateEmployeeList={populateEmployeeList}
                    empId={empData.id}
                  />
                  <EmpEditButton empId={empData.id} />
                </Box>
              </Collapse>
            </CardActions>
            <Avatar
              alt={empData.photo}
              src={empData.photo}
              sx={{ height: '120px', width: '120px' }}
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
                    <Typography
                      variant='body1'
                      sx={{
                        maxWidth: '150px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {empData.email}
                    </Typography>
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
    </ThemeProvider>
  )
}

export default GridCard

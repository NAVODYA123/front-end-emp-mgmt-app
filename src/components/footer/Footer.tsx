import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#145DA0',
        boxShadow: '0 -2px 2px 1px #535354',
      }}
    >
      <CopyrightIcon sx={{color:'primary.contrastText'}} />
      <Typography sx={{ color: 'primary.contrastText' }}>
        {' '}
        2022 all rights reserved
      </Typography>
    </Box>
  )
}

export default Footer

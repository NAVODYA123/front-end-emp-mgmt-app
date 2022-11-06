import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ListTableHeader = () => {
  return (
    <Box sx={{ width:'100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    }}>
    <Box sx={{
      width: '90%',
      height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: '8px',        
        alignItems: 'center',}}>
      {' '}
      <Box sx={{
        width:'100%',
        fontWeight: 'bold', display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',}}>
      <Box sx={{ width: '10%' }}>Photo</Box>
      <Box sx={{ width: '10%' }}>First name</Box>
      <Box sx={{ width: '10%' }}>Last name</Box>
      <Box sx={{ width: '20%' }}>Email</Box>
      <Box sx={{ width: '10%' }}>Phone</Box>
      <Box sx={{ width: '10%' }}>Gender</Box>
      <Box sx={{ width: '10%' }}>Actions</Box>
      </Box>
    </Box>
    </Box>
  )
}

export default ListTableHeader

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#145DA0',
      }}
    >
         <Link href='/'>
      <IconButton sx={{pl:2, pt:2, pr:2, pb:2}}>
        <HomeIcon fontSize='large'/>
      </IconButton>
      </Link>
    </Box>
  )
}

export default Header

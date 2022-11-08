import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ViewEmployee from './employee/list'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { capitalize } from '@mui/material'
import { borderRadius } from '@mui/system'

export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center',width: '100%', height:'100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems:'center',height:'300px'}}>

        <Typography variant='h3' color='primary.dark' sx={{textTransform:'capitalize'}}>Welcome to employee management portal</Typography>
       
        <Link href='employee/list'><Button variant="contained"  size="large" sx={{ borderRadius:8}}>
        
         View Employee List
        </Button></Link>


        </Box>
      </Box>
    </>
  )
}

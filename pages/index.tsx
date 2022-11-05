import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ViewEmployee from './employee/list'
import Link from 'next/link';

export default function Home() {

  
  return (<>
  <h2>
        <button><Link href="employee/viewemployee">View Employee</Link></button>
      </h2>
  {/* <ViewEmployee/> */}
  </>)
}

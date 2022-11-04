// import { GetServerSideProps } from "next"

// export const getAllEmployees: GetServerSideProps = async () =>{
//     console.log('serverside props')
//     const res = await fetch('http://localhost:3000/employee', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       },
//     })
//     const data = await res.json()
//     console.log(data, 'data fetched')
//     return {
//       props: {
//         employeeData: data,
//       }, // will be passed to the page component as props
//     }
//   }
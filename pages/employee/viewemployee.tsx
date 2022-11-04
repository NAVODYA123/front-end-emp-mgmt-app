// import GridCard from '../../components/GridCard'
import ListCard from '../../src/components/ListCard'
import type { Employee } from '../../src/components/types/employeedatatypes'
// import { getAllEmployees } from '../../resolvers/getallemployees'

// export const getServerSideProps = async () =>{
//   console.log('serverside props')
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//   })
//   const data = await res.json()
//   console.log(data, 'data fetched')
//   return {
//     props: {
//       employeeData: data,
//     }, // will be passed to the page component as props
//   }
// }

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`)

  const postData = await res.json()

  console.log(postData)

  return {
    props: { postData },
  }
}
const ViewEmployee = ({ postData }: any) => {
  // getServerSideProps()
  console.log('post data here',postData)
  return (
    <div>
      <ListCard empData={postData} />
    </div>
  )
}

export default ViewEmployee

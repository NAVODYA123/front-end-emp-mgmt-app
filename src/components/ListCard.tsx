// export type Employee = {
//   id: string
//   firstname: string
//   lastname: string
//   email: string
//   number: number | string
//   gender: string
//   photo: string
// }
import type {Employee} from './types/employeedatatypes'
type Props = {
  empData: Employee[]
}

//   type Props = {employeeData: Props}

const ListCard = ({ ...employeeData }: Props) => {
  // getServerSideProps()
  const b = JSON.parse(JSON.stringify(employeeData))
  console.log('emp data',employeeData)
  console.log('b',b)
  return (
    <div>
    
      {/* {employeeData?.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
          </div>
        )
      })} */}
    </div>
  )
}

export default ListCard

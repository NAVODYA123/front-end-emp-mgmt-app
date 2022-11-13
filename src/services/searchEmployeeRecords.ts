//fetch employee by id
export const getEmployeeById = async (id: number) => {
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return JSON.stringify(data)
    })
}

//delete selected employee record
export const deleteEmplyeeRecord = async (id: string) => {
    console.log('api call reached')
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },   
    }).then((response) => response.json())
  }
  
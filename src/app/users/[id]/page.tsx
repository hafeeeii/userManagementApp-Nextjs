import useFetch from '@/hooks/useFetch'
import React from 'react'

const UserDetails = async ({params}:{
    params:{
        id:string
    }
}) => {
    let newId =  parseInt(params.id)
    let data = await useFetch(`/users/${newId}`)
    console.log(data,'this is singledata')
 
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails
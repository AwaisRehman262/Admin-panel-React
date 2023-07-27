import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { Users } from '../Data/Users'


export const UsersPanel = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Users)
  }, [])
  
  const columns = [
    { field:"id", headerName:"ID", width:10},
    { field:"name", headerName:"Name", width:200},
    { field:"username", headerName:"Username", width:150},
    { field:"email", headerName:"Email", width:250}
  ]

  const rows = Users.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email:user.email
  }))
  return (
    <div className='UsersPanel'>
    <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

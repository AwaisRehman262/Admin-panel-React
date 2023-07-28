import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Products } from '../Data/Products'

export const ProductsPanel = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Products)
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "description", headerName: "Description", width: 250 },
    { field: "category", headerName: "Category", width: 250 },
    { field: "rating", headerName: "Rating", width: 250 },
    { field: "count", headerName:"Count", width: 250 }
  ]

  const rows = Products.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    rating: product.rating['rate'],
    count: product.rating['count']
  }))
  return (
    <div className='ProductsPanel'>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

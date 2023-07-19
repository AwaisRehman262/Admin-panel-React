import React from 'react'
import {DataGrid,rows,columns,initialState,pagination} from '@mui/material/Table'

export const ProductsPanelView = () => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </>
  )
}
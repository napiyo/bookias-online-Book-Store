import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function MyBackDrop({open}) {
    const closeBlackDrop =()=>{
        open=false;
      }
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={closeBlackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}
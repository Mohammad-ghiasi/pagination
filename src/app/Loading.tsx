"use client"
import { Box } from '@mui/material'
import React from 'react'
import { Grid } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Box className="flex justify-center items-center w-[100%] h-[100vh]">
    <Grid
        visible={true}
        height="100"
        width="100"
        color="#2d56dc"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
    />
</Box>
  )
}

export default Loading
"use client"
import MediaCard from '@/components/card/Card'
import { useGet } from '@/hooks/useGet'
import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Grid } from 'react-loader-spinner'

export interface itemType {
  id: number;
  ad_type: 'buy' | 'sell';
  title: string;
  description: string;
  image: string;
  price: number
}

const Simple = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { data, isPending, next, previous } = useGet("http://localhost:8000/ads/advertises/paged/", pageNumber);
  
  if (isPending || !data) {
    return <Grid
      visible={true}
      height="100"
      width="100"
      color="#dc2d2d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass="grid-wrapper"
    />
  }
  return (
    <>
      <Typography variant='h4' sx={{}}>Simple pagination...</Typography>
      <Divider style={{ backgroundColor: 'gray', height: '.4px', marginBottom: 18, marginTop: 10 }} />
      <Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9">
          {data?.map((item: itemType) => <MediaCard key={item.id} {...item}/>)}
        </Box>
      </Box>
      <Box className="flex justify-center space-x-5 mt-12">
        {previous && <Button onClick={(): void => setPageNumber(pageNumber - 1)} variant='contained' color='info'>{'<< perivous'}</Button>}
        {next && <Button onClick={(): void => setPageNumber(pageNumber + 1)} variant='contained' color='info'>{'Next >>'}</Button>}
      </Box>
    </>
  )
}

export default Simple
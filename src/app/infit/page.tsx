"use client"
import { useInfinit } from '@/hooks/iseInfinite';
import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { itemType } from '../simple/page';
import MediaCard from '@/components/card/Card';

const Infinit = () => {
  const seen = useRef(null)
  const { data, isPending, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isFetchingNextPage } = useInfinit("http://localhost:8000/ads/advertises/paged/");
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (hasNextPage && entries[0].isIntersecting) {
          fetchNextPage()
        }
      }, {
      threshold: 1
    }
    )
    if (seen.current) {
      observer.observe(seen.current)
    }
    return () => {
      if (seen.current) {
        observer.unobserve(seen.current)
      }
    }

  }, [seen, hasNextPage, fetchNextPage])
  return (
    <>
      <Typography variant='h4' sx={{}}>Infinit pagination...</Typography>
      <Divider style={{ backgroundColor: 'gray', height: '.4px', marginBottom: 18, marginTop: 10 }} />
      <Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9">
          {data?.map((item: itemType) => <MediaCard key={item.id} {...item}/>)}
        </Box>
      </Box>
      <Divider ref={seen} />
    </>
  )
}

export default Infinit
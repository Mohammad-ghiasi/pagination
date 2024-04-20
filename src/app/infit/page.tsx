"use client"
import { useInfinit } from '@/hooks/iseInfinite';
import { Divider } from '@mui/material';
import React, { useEffect, useRef } from 'react'

const Infinit = () => {
  const seen = useRef(null)
  const { data, isPending, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isFetchingNextPage } = useInfinit("url");
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
      <div>Infinit</div>
      <Divider ref={seen} />
    </>
  )
}

export default Infinit
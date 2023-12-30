import React from 'react'
import { Skeleton, Stack } from "@mui/material";

const SkeletonCard = () => {
  return (
    <div className="product-card">
    <Stack spacing={1}>
      <Skeleton variant="text"  width={300} height={300} />
    </Stack>
    <Stack spacing={1} sx={{padding: '10px'}}>
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: { xs: '100%', sm: '75%', md: '75%', lg: '75%' } }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: { xs: '100%', sm: '25%', md: '25%', lg: '25%' } }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: { xs: '50%', sm: '15%', md: '15%', lg: '15%' } }}
      />
      <Skeleton
      variant="text"
      sx={{ fontSize: "1rem", width: { xs: '80%', sm: '30%', md: '40%', lg: '40%' } }}
    />
    </Stack>
  </div>
  )
}

export default SkeletonCard

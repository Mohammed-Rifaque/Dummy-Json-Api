import React from 'react'
import { Grid, Skeleton, Stack } from "@mui/material";

export const SkeletonCard = () => {
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


export const ProductDetailSkeleton = () =>{
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} md={8} sx={{ display: "flex" }}>
      <Grid item md={2} spacing={2} >
        <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
        <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
        <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
        <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
        <Skeleton variant="rectangular" width={80} height={60} sx={{ marginBottom: "5px" }} />
      </Grid>
      <Grid item md={6}>
        <Skeleton variant="rectangular" width={500} height={300} />
      </Grid>
    </Grid>
    <Grid item xs={12} md={4}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={300} />
      <Skeleton variant="text" width={250} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={150} />
    </Grid>
  </Grid>
  )
}
import React from 'react';
import { Typography, Container } from '@mui/material';

const NotFound = () => {
  return (
    <Container style={{height:"50vh", margin:"30px"}}>
      <Typography variant="h1" align="center">
        404 - Not Found
      </Typography>
      <Typography variant="body1" align="center">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;

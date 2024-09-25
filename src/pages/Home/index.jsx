import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        padding: 3,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to PowerTIC
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/mui-components-test')}
        >
          Dashboard
        </Button>
      </Box>
    </Box>
  );
}
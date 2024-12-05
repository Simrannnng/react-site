import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const handleNewJobOfferClick = () => {
    navigate('/JobFormPage');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#E5F1FF',
        py: 4,
        textAlign: 'center',
        borderRadius:"18px",
        marginBottom:"100px",
        mx: {
          xs: 0, 
          sm: 6, 
          md: 5, 
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          Quick actions
        </Typography>

        <Typography variant="body1" color="textSecondary" gutterBottom>
          Define your requirements and start onboarding amazing talent.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleNewJobOfferClick}
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            fontWeight: 'bold',
            borderRadius: 4,
            textTransform: 'none',
          }}
        >
          New job offer
        </Button>
      </Container>
    </Box>
  );
};

export default QuickActions;

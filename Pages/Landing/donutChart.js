import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import dotimg from '../../Assets/png/dot.png';
import dotimg1 from '../../Assets/png/dot (1).png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ArcElement);

const DonutChart = () => {
  // Bar chart data 
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Job View',
        data: [63, 42, 56, 60, 20, 70, 35],
        backgroundColor: '#44aaff',
        borderRadius: 10,
      },
      {
        label: 'Job Applied',
        data: [80, 35, 70, 90, 38, 16, 79],
        backgroundColor: '#ff44aa',
        borderRadius: 10,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#666',
          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      x: {
        stacked: false,
        ticks: {
          color: '#666',
        },
        grid: {
          display: false,
        },
        categoryPercentage: 0.8,
        barPercentage: 0.5,
      },
    },
  };

  // Donut chart data 
  const donutData = {
    labels: ['Inbox', 'Sent'],
    datasets: [
      {
        label: 'Messages',
        data: [321, 763, 150],
        backgroundColor: ['#2f64ec', '#F7F7FB', '#CBE2FF'],
        hoverBackgroundColor: ['#2f64ec', '#F7F7FB', '#CBE2FF'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    circumference: 180,
    rotation: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, p: 6, flexWrap: 'wrap' }}>
      {/* Bar Chart */}
      <Box sx={{ flex: 1, maxWidth: '100%', boxSizing: 'border-box' }}>
        <Card elevation={3} sx={{ borderRadius: 3, p: 2, '@media (max-width: 600px)': { p: 0 } }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" fontWeight="bold" color="text.secondary">
                <span style={{ fontSize: '24px', color: '#555' }}>246</span>
                <br /> Total
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 9, '@media (max-width: 600px)': { gap: 2 } }}>
                <Typography
                  color="black"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    '@media (max-width: 600px)': { fontSize: '13px' },
                  }}
                >
                  <Box component="img" src={dotimg} alt="Job View Icon" sx={{ width: 15, height: 15, mr: 1 }} />
                  167 <br /> Job View
                </Typography>
                <Typography
                  color="black"
                  sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    '@media (max-width: 600px)': { fontSize: '13px' },
                  }}
                >
                  <Box component="img" src={dotimg1} alt="Job Applied Icon" sx={{ width: 15, height: 15, mr: 1 }} />
                  28 <br /> Job Applied
                </Typography>
              </Box>
            </Box>
            <Box sx={{ height: 300, width: '100%', overflow: 'hidden' }}>
              <Bar data={barData} options={barOptions} />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Donut Chart */}
      <Box sx={{ flex: 1, minWidth: '250px', maxWidth: {lg:"500px"}, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
        <Box
          sx={{
            width: '100%',
            height: '445px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '40px' }}>
            Count of Messages
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: '190px', marginBottom: '10px', '@media (max-width: 600px)': { height: '150px' } }}>
            <Doughnut data={donutData} options={donutOptions} />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography variant="subtitle2" color="textSecondary" sx={{ marginTop: '80px' }}>
                Total Messages
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                1,375
              </Typography>
            </Box>
          </Box>
          <Grid container sx={{ mt: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 14, height: 14, backgroundColor: '#2f64ec', borderRadius: '50%' }} />
              <Typography variant="body2" color="text.secondary">
                Inbox
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                763
              </Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 3 }}>
              <Box sx={{ width: 14, height: 14, backgroundColor: '#8ed2ff', borderRadius: '50%' }} />
              <Typography variant="body2" color="text.secondary">
                Sent
              </Typography>

              <Typography variant="body2" fontWeight="bold">
                321
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', gap: 6, mt: 3, '@media (max-width: 600px)': { gap: 1 } }}>
            <Button variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 'bold', height: '50px', width: '150px', fontSize: '17px','@media (max-width: 380px)':{height:"40px" , width:"100px", fontSize:"13px"} }}>
              Compose
            </Button>
            <Button variant="outlined" color="primary" sx={{ textTransform: 'none', fontWeight: 'bold', height: '50px', width: '150px', fontSize: '17px','@media (max-width: 380px)':{height:"40px" , width:"100px", fontSize:"13px"} }}>
              Go to inbox
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DonutChart;

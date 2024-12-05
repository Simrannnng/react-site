import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isJobFormPage = location.pathname === '/JobFormPage';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: { xs: '8px 10px', sm: '10px 35px', md: '10px 30px' },
                backgroundColor: isJobFormPage ? '#0059BD' : 'white',
                marginTop:isJobFormPage ? '30px' : '10px',
                fontFamily: 'Arial, sans-serif',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: '10px', sm: '0' },
                
            }}
        >
            <FormControl>
                <Select
                    defaultValue="en"
                    sx={{
                        borderRadius: '30px',
                        fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
                        minWidth: { xs: '100px', sm: '120px', md: '130px' },
                        backgroundColor:"white",
                        border: '1px solid #ccc',
                        textAlign: 'center',
                    }}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Hindi</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                </Select>
            </FormControl>


            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end' },
                    textAlign: { xs: 'center', sm: 'right' },
                    width: '100%',
                    color:isJobFormPage ? 'white' : 'black',
                    
                }}
            >
                <Typography sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' , marginLeft:{sm:"10px" , md:"" , lg:""}} }}>
                    Resources -
                </Typography>
                <Typography
                    component="span"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' } }}
                >
                    About us
                </Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' } }}>
                    @ 2023 Cookies
                </Typography>
                <Typography
                    component="span"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' } }}
                >
                    Privacy and Terms
                </Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' } }}>
                    Do Not Sell My Personal Information -
                </Typography>
                <Typography
                    component="span"
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '15px', sm: '13px', md: '14px', lg: '16px' } }}
                >
                    Contact & feedback
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;

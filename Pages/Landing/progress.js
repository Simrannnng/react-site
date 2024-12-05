import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";


const Circle = ({ number, isActive }) => {
    return (
        <Box
            sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: isActive ? "#ff9800" : "#e0e0e0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                zIndex: 1,
            }}
        >
            {number}
        </Box>
    );
};


const Line = () => {
    return (
        <Box
            sx={{
                flex: 1,
                height: 5,
                borderRadius: 9,
                backgroundColor: "#ff9800",
            }}
        />
    );
};


const ProgressLine = () => {
    const steps = [1, 2, 3, 4, 5];
    const activeStep = 5;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: {xs:"80% ",sm:"82%" ,md:" 87%" ,lg:"92%"},
                    p: 3,
                    textAlign: "left",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    marginTop: '50px',
                    marginBottom: '100px',
                }}
            >

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 , fontSize:{xs:"15px"}}}>
                    Congratulations! You have completed 5 items on your profile.
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, fontSize: {xs:"15px" ,lg:"20px"} }}>
                    Next up:{" "}
                    <Link
                        href="#"
                        sx={{
                            color: "black",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                    >
                        Add your company slogan
                    </Link>
                </Typography>


                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        mt: 2,
                    }}
                >

                    <Line />

                    {steps.map((step, index) => (
                        <React.Fragment key={step}>
                            <Circle number={step} isActive={index < activeStep} />
                            {index < steps.length - 1 && <Line />}
                        </React.Fragment>
                    ))}


                    <Line />
                    <Typography
                        variant="body2"
                        sx={{ textAlign: "right", fontWeight: 500, fontSize: "18px" }}
                    >
                        83%
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default ProgressLine;

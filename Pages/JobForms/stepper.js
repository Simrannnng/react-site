import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const steps = [
  { label: "Job Details", color: "#007bff" },
  { label: "Job Requirements" },
  { label: "Preview" },
  { label: "Payment" },
];

const StepperComponent = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f8f9fa", marginTop: "50px" }}>

      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ marginTop: "50px", marginBottom: "40px", marginLeft: { xs: "0px", lg: "30px" } }}
      >
        <Link underline="none" color="primary" href="#">
          Jobs
        </Link>
        <Link underline="none" color="primary" href="#">
          Academics
        </Link>
        <Typography color="text.primary">New Job</Typography>
      </Breadcrumbs>


      <Box
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          p: 2,
          maxWidth: { xs: "100%", lg: "93%" },
          margin: "20px auto",
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                mx: { xs: 1, sm: 2 },
              }}
            >

              <Box
                sx={{
                  width: { xs: 18, sm: 24 },
                  height: { xs: 18, sm: 24 },
                  backgroundColor: "#f0f8ff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: `1px solid ${step.color}`,
                  marginRight: 1,
                }}
              >
                <CheckIcon
                  fontSize="small"
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: step.color || "#000000",
                  }}
                />
              </Box>


              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: 500,
                  color: step.color || "#000000",
                }}
              >
                {step.label}
              </Typography>
            </Box>


            {index !== steps.length - 1 && (
              <Box
                sx={{
                  width: "1px",
                  height: { xs: "30px", sm: "40px" },
                  backgroundColor: "#e0e0e0",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default StepperComponent;

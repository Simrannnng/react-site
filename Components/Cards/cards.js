import React from "react";
import { Grid, Card, CardContent, Box, Typography } from "@mui/material";

function CardsComponent({ 
   
  subtitle, 
  count, 
  backgroundColor, 
  imageSrc 
}) {
  return (
    <Grid item xs={6} sm={6} md={6} lg={4}>
      <Card
        sx={{
          backgroundColor: backgroundColor || "#ffffff",
          textAlign: "left",
          height: "120px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          marginLeft:{xs:"15px" ,sm:"10px"}
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  fontSize: "1.8rem",
                  marginTop: "10px",
                  "@media (max-width: 500px)": { fontSize: "15px" },
                }}
              >
                {count || 0}
              </Typography>
              <Typography
                sx={{
                  marginTop: "5px",
                  "@media (max-width: 500px)": { fontSize: "12px" },
                }}
                variant="body2"
              >
                {subtitle || "Subtitle"}
              </Typography>
            </Box>
            {imageSrc && (
              <Box
                component="img"
                src={imageSrc}
                alt="Icon"
                sx={{
                  height: "50px",
                  width: "50px",
                  "@media (max-width: 500px)": {
                    height: "40px",
                    width: "40px",
                  },
                }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardsComponent;

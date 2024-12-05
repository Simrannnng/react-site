import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const CustomJobBanner = ({ setFieldValue, errors, touched }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
       reader.onload = () => {
        setImage(reader.result);
        setFieldValue("jobBanner", file); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
    sx={{
      width: { xs: "90%", sm: "40%", md: "50%", lg: "48%" },
      marginRight: { sm: "30px", md: "30px", lg: "15px" },
      height: { lg: "25%" },
      mt: 4,
      marginLeft: { xs: "17px", sm: "auto", md: "auto", lg: "auto" },
      marginTop: {sm:"-300px", md:"-300px", lg:"-290px"},
      
    }}
    >
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        
        <Typography variant="h6" sx={{ fontSize: "16px" }}>
          Custom job banner
        </Typography>

        
        <Button
          variant="outlined"
          component="label"
          startIcon={<PhotoCameraIcon />}
          sx={{
            textTransform: "none",
            fontSize: {sm:"12px", lg:"14px"},
            borderColor: "#007BFF",
            color: "#007BFF",
            borderRadius: "20px",

          }}
        >
          Select banner image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Button>
      </Box>

      
      <Box
        sx={{
          width: "100%",
          height: "250px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          mb: 2,
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography sx={{ fontSize: "14px", color: "#aaa" }}>
            No image uploaded
          </Typography>
        )}
      </Box>
      {errors.jobBanner && touched.jobBanner && (
        <Typography variant="caption" color="error">
          {errors.jobBanner}
        </Typography>
      )}
      
      
    </Box>
  );
};

export default CustomJobBanner;

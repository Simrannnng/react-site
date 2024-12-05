import React from "react";
import { Button } from "@mui/material";

function ButtonComponent({ 
  text, 
  icon, 
  onClick, 
  variant = "contained", 
  sx = {} 
}) {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      onClick={onClick}
      sx={{
        height: "50px",
        "@media (max-width: 600px)": {
          marginTop: "20px",
          marginBottom: "20px",
          height: "40px",
        },
        ...sx, 
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;

import React, { useState } from "react";
import { Box, Typography, TextField, Autocomplete } from "@mui/material";

const IndustryType = ({ options, errors, touched, setFieldValue, name }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "45%" },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "14px" },
          marginBottom: "10px",
          marginLeft:{sm:"25px" , md:"30px ",lg:"70px"} 
        }}
      >
        Industry Type <span style={{ color: "red", marginLeft: "4px" }}>*</span>
      </Typography>
      <Autocomplete
        options={options}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setFieldValue(name, newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select Industry"
            size="small"
            error={!!errors[name] && touched[name]}
            helperText={touched[name] && errors[name]}
            sx={{marginLeft:{sm:"25px" , md:"30px ",lg:"70px"}}}
          />
        )}
      />
    </Box>
  );
};

export default IndustryType;

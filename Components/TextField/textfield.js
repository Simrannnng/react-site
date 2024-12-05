import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Field } from "formik";

const JobTitle = ({ errors, touched }) => {
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
        }}
      >
        Job Title <span style={{ color: "red", marginLeft: "4px" }}>*</span>
      </Typography>
      <Field name="jobTitle">
        {({ field }) => (
          <TextField
            {...field}
            placeholder="e.g.: Content Manager"
            variant="outlined"
            fullWidth
            size="small"
            error={!!errors.jobTitle && touched.jobTitle}
            helperText={touched.jobTitle && errors.jobTitle}
          />
        )}
      </Field>
    </Box>
  );
};

export default JobTitle;

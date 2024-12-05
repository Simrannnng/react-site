import React from 'react';
import { Grid, TextField } from '@mui/material';

function DateOption({ errors, touched, setFieldValue, width, marginLeft }) {
  return (
    <Grid item xs={3}>
      <TextField
        fullWidth
        label="Contract Start Date *"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.contractStartDate && touched.contractStartDate}
        helperText={touched.contractStartDate && errors.contractStartDate}
        onChange={(e) => setFieldValue("contractStartDate", e.target.value)}
        sx={{ width: width || '100%', 
            marginLeft: marginLeft || '0px', 

        }} 
      />
    </Grid>
  );
}

export default DateOption;

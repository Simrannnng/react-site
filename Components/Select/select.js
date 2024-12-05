import React from 'react';
import {Grid,FormControl,MenuItem,FormHelperText,Select,InputLabel,} from '@mui/material';

function SelectOption({errors,touched,setFieldValue,fieldName,label,options,gridSize = 6,customStyles = {}, 
}) {
  return (
    <Grid
      item
      xs={gridSize}
      sx={{
        marginLeft: customStyles.marginLeft || { sm: '40px', md: '145px', lg: '315px' },
        ...customStyles, 
      }}
    >
      <FormControl
        fullWidth
        sx={{ width: customStyles.width || '100%' }} 
        error={!!errors[fieldName] && touched[fieldName]}
      >
        <InputLabel>{label}</InputLabel>
        <Select onChange={(e) => setFieldValue(fieldName, e.target.value)}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errors[fieldName] && touched[fieldName] && (
          <FormHelperText>{errors[fieldName]}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
}

export default SelectOption;

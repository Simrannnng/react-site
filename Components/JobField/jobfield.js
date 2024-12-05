import React from "react";
import { Box, Typography, RadioGroup, FormControl, FormControlLabel, Radio, FormHelperText } from "@mui/material";
import { Field } from "formik";

const JobDetailsComponent = ({ errors, touched, setFieldValue, name, options, title }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                
            }}
        >
            
            <Box sx={{ flex: 1 }}>
                <Typography
                    sx={{
                        fontSize: { xs: "13px", sm: "15px", md: "16px" },
                        fontWeight: "bold",
                        mb: 2,
                        color: "black",
                        marginLeft: { xs:"8px " ,sm: "8px" },
                    }}
                >
                    {title}
                </Typography>
                <FormControl component="fieldset" error={!!errors[name] && touched[name]}>
                    <Field name={name}>
                        {({ field }) => (
                            <RadioGroup
                                row
                                {...field}
                                onChange={(e) => setFieldValue(name, e.target.value)}
                                sx={{
                                    gap: { xs: 1, sm: 2, lg: 5 },
                                    
                                    "& .MuiFormControlLabel-root": { margin: 0 },
                                }}
                            >
                                {options.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        value={option.value}
                                        control={<Radio size="small" />}
                                        label={option.label}
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontSize: { xs: "13px", sm: "12px", md: "14px" },
                                            },
                                        }}
                                    />
                                ))}
                            </RadioGroup>
                        )}
                    </Field>
                    {errors[name] && touched[name] && <FormHelperText>{errors[name]}</FormHelperText>}
                </FormControl>
            </Box>
            
        </Box>
    );
};

export default JobDetailsComponent;

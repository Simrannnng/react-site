import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import JobDetailsComponent from "../../Components/JobField/jobfield";
import SelectOption from "../../Components/Select/select";
import DateOption from "../../Components/Date/date";


function JobForm({ errors, touched, setFieldValue }) {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={1} alignItems="center">
        <JobDetailsComponent

          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          name="jobDetails"
          title="Job Details"
          options={[
            { value: "Job", label: "Job" },
            { value: "Internship", label: "Internship" },
            { value: "Traineeship", label: "Traineeship" },
          ]}
        />

        <SelectOption
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          fieldName="jobLocation"
          label="Select the location"
          options={[
            { value: 'India', label: 'India' },
            { value: 'America', label: 'America' },
            { value: 'Japan', label: 'Japan' },
          ]}
        />

      </Grid>

      <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
        <DateOption
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />

        <SelectOption
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          fieldName="minDuration"
          label="Minimum Duration (Months)"
          options={[
            { value: '1', label: '1 Month' },
            { value: '2', label: '2 Months' },
            { value: '3', label: '3 Months' },
            { value: '6', label: '6 Months' },
            { value: '12', label: '12 Months' },
          ]}
          gridSize={3}
          customStyles={{
            width: '96%',
            marginLeft: '0',
          }}
        />


        <Grid item xs={12} sm={3} md={3} lg={3}>
          <TextField
            fullWidth
            label="Compensation Indicator (Min)"
            placeholder="e.g., 1500"
            InputProps={{
              endAdornment: <span>€</span>,
            }}
            error={!!errors.compensation && touched.compensation}
            helperText={touched.compensation && errors.compensation}
            onChange={(e) => setFieldValue("compensation", e.target.value)}
          />
        </Grid>

        <SelectOption

          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          fieldName="compensationType"
          label="Compensation Type"
          options={[
            { value: 'Per hour', label: 'Per hour' },
            { value: 'Per month', label: 'Per month' },
            { value: 'Per Year', label: 'Per Year' },

          ]}
          gridSize={3}
          customStyles={{
            width: '100%',
            marginLeft: '0',

          }}
        />

      </Grid>
    </Box>
  );
}

export default JobForm;
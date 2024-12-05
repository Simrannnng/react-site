import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Formik, Form } from "formik";
import JobDescription from "../../Components/Description/description";
import JobForm from "./jobForms";
import Jobsummary from "./lower";
import CustomJobBanner from "./banner";
import { validationSchema } from "../../Utils/Validation/jobform";
import { useDispatch } from "react-redux";
import { saveJobDetails, fetchJobDetails } from "../../Store/jobDetailsSlice"; 
import JobTitle from "../../Components/TextField/textfield";
import JobDetailsComponent from "../../Components/JobField/jobfield";
import DateOption from "../../Components/Date/date";
import IndustryType from "../../Components/Autocomplete/autocomplete";

const industries = ["Healthcare", "Education", "Technology"];

function JobDetails() {
  const dispatch = useDispatch();
  const [formJobDetails, setFormJobDetails] = React.useState(null);
  const [fetchStatus, setFetchStatus] = React.useState(localStorage.getItem('fetchStatus') || ''); 
  useEffect(() => {
    const status = localStorage.getItem('fetchStatus'); 
    setFetchStatus(status); 
    dispatch(fetchJobDetails()); 
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        jobDetails: "",
        jobCategory: "",
        jobTitle: "",
        industryType: "",
        jobDescription: "",
        jobLocation: "",
        contractStartDate: "",
        minDuration: "",
        compensation: "",
        compensationType: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
      
        dispatch(saveJobDetails(values));
        setFormJobDetails(values); 
        const formattedValues = ` 
          Job Details: ${values.jobDetails || "N/A"}
          Job Category: ${values.jobCategory || "N/A"}
          Job Title: ${values.jobTitle || "N/A"}
          Industry Type: ${values.industryType || "N/A"}
          Job Description: ${values.jobDescription || "N/A"}
          Job Location: ${values.jobLocation || "N/A"}
          Contract Start Date: ${values.contractStartDate || "N/A"}
          Minimum Duration: ${values.minDuration || "N/A"}
          Compensation: ${values.compensation || "N/A"}
          Compensation Type: ${values.compensationType || "N/A"}
          Job Summary Description: ${values.description || "N/A"}
        `;
        alert(`Form Submitted Successfully:\n\n${formattedValues}`);
        resetForm(); 
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <Box sx={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
            <Box
              sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: "8px",
                maxWidth: { xs: "82%", sm: "91%", md: "93%", lg: "91%" },
                margin: "auto",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: { xs: 0, sm: 9, md: 21, lg: 45 },
                  alignItems: "flex-start",
                }}
              >
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
                <JobDetailsComponent
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  name="jobCategory"
                  title="Job Category"
                  options={[
                    { value: "Full Time", label: "Full Time" },
                    { value: "Part Time", label: "Part Time" },
                  ]}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 5,
                  position: "relative",
                }}
              >
                <JobTitle errors={errors} touched={touched} />
                <IndustryType
                  options={industries}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  name="industryType"
                />
              </Box>

              <JobDescription />
              <JobForm
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />

              <DateOption
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                width={{
                  lg: "48%",
                  md: "43%",
                  sm: "48%",
                }}
                marginLeft="9px"
              />

              <Jobsummary
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
              />
              <CustomJobBanner
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  width: "100px",
                  float: "right",
                  borderRadius: "20px",
                }}
              >
                Next
              </Button>

              {formJobDetails && (
                <Box sx={{ mt: 3, backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "5px" }}>
                  <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                    Saved Job Details
                  </Typography>
                  <pre>{JSON.stringify(formJobDetails, null, 2)}</pre>
                </Box>
              )}

              {fetchStatus && (
                <Box sx={{ mt: 3, padding: "10px", borderRadius: "5px", backgroundColor: "#e0ffe0" }}>
                  <Typography variant="h6" sx={{ color: "#28a745" }}>
                    Fetch Status: {fetchStatus}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default JobDetails;
 
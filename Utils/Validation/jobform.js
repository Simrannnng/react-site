import * as Yup from "yup";

// Validation Schema
  export const validationSchema = Yup.object({
  jobDetails: Yup.string().required("Please select a job detail"),
  jobCategory: Yup.string().required("Please select a job category"),
  jobTitle: Yup.string().required("Job Title is required"),
  industryType: Yup.string().required("Please select an industry type"),
  jobDescription: Yup.string().required("Job Description is required"),
  jobLocation: Yup.string().required("Location is required"),
  contractStartDate: Yup.date().required("Contract start date is required").nullable(),
  minDuration: Yup.number().required("Minimum Duration is required"),
  compensation: Yup.number().required("Compensation is required"),
  compensationType: Yup.string().required("Compensation Type is required"),
  description: Yup.string().required("Job Description is required"),
  jobBanner: Yup.mixed()
    .required("Job banner is required")
    .test("fileSize", "File is too large", (value) => !value || (value && value.size <= 1048576)),
});

// Highlight Text Function
export const highlightText = (input, option) => {
  const parts = option.split(new RegExp(`(${input})`, "i"));
  return parts.map((part, index) =>
    part.toLowerCase() === input.toLowerCase() ? (
      <span key={index} style={{ fontWeight: "bold", color: "black" }}>
        {part}
      </span>
    ) : (
      <span key={index} style={{ color: "#9e9e9e" }}>
        {part}
      </span>
    )
  );
};

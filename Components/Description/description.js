import React from "react"; 
import { Box, TextField, IconButton, Typography } from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatStrikethroughIcon from "@mui/icons-material/StrikethroughS";
import { useField} from "formik";

const JobDescription = () => {
    const [field, meta, helpers] = useField("jobDescription");
    const { setValue } = helpers; 
    const { value } = field; 
    const [activeFormat, setActiveFormat] = React.useState({
        bold: false,
        italic: false,
        strikethrough: false,
    });

    const toggleFormat = (type) => {
        setActiveFormat((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <Box sx={{ width: "100%", maxWidth: 1400, mx: "auto", mt: 4 }}>
            <Typography
                variant="body1"
                component="label"
                htmlFor="job-description"
                sx={{
                    display: "block",
                    mb: 1,
                    fontSize: { xs: "15px" },
                }}
            >
                Short job description <span style={{ color: "red" }}>*</span>
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "flex-start",
                    mb: "-1px",
                    p: 1,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            >
                <IconButton
                    onClick={() => toggleFormat("italic")}
                    color={activeFormat.italic ? "primary" : "default"}
                >
                    <FormatItalicIcon />
                </IconButton>

                <IconButton
                    onClick={() => toggleFormat("bold")}
                    color={activeFormat.bold ? "primary" : "default"}
                >
                    <FormatBoldIcon />
                </IconButton>

                <IconButton
                    onClick={() => toggleFormat("strikethrough")}
                    color={activeFormat.strikethrough ? "primary" : "default"}
                >
                    <FormatStrikethroughIcon />
                </IconButton>
            </Box>

            <TextField
                id="job-description"
                placeholder="Briefly describe what the job consists of..."
                multiline
                minRows={4}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                fullWidth
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
                InputProps={{
                    style: {
                        fontWeight: activeFormat.bold ? "bold" : "normal",
                        fontStyle: activeFormat.italic ? "italic" : "normal",
                        textDecoration: activeFormat.strikethrough
                            ? "line-through"
                            : "none",
                    },
                }}
            />
        </Box>
    );
};

export default JobDescription;             
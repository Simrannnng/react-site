import React, { useState } from "react";
import { Box, TextField, IconButton, Typography} from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatStrikethroughIcon from "@mui/icons-material/StrikethroughS";


const Jobsummary = ({ errors, touched, setFieldValue }) => {
    
    const [activeFormat, setActiveFormat] = useState({
        bold: false,
        italic: false,
        strikethrough: false,
    });

    const toggleFormat = (type) => {
        setActiveFormat((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "48%", md:"43%", lg: "48%" }, height:{lg:"190px"}, textAlign: "left", marginLeft: { sm: "10px ", lg: "10px" }
            }}
        >
            <Typography
                variant="body1"
                component="label"
                htmlFor="description"
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
                    gap: 1,
                    justifyContent: "flex-start",
                    mb: "-1px",
                    p: 1,
                    border: "1px solid #ccc",

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
                id="description"
                placeholder="Briefly describe what the job consists of..."
                multiline
                minRows={4}
                
                onChange={(e) => setFieldValue("description", e.target.value)}
                fullWidth
                error={!!errors.description && touched.description}
                helperText={touched.description && errors.description}
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

export default Jobsummary;
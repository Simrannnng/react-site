import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

function ActionModal({ open, onClose }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    textAlign: "center",
                }}
            >
                <Typography
                    id="modal-title"
                    variant="h6"
                    sx={{
                        mb: 3,
                    }}
                >
                    You sure you want to Logout?
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <Button variant="contained" color="primary" onClick={onClose}>
                        Yes
                    </Button>
                    <Button variant="outlined" color="primary" onClick={onClose}>
                        No
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default ActionModal;

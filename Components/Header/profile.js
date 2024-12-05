import React, { useState } from "react";
import { Box, IconButton, Popover, Avatar, Button } from "@mui/material";
import ActionModal from "./finalpop";

function ProfilePopover() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleProfileClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleLogoutClick = () => {
        setAnchorEl(null);
        setModalOpen(true);
        console.log("Modal should open now");
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        console.log("Modal closed");
    };

    const open = Boolean(anchorEl);
    const id = open ? "profile-popover" : undefined;

    return (
        <Box>
            <IconButton color="inherit" onClick={handleProfileClick}>
                <Avatar
                    alt="Profile Picture"
                    src="https://i.pravatar.cc/40"
                    sx={{
                        width: { xs: 30, sm: 40, md: 30 },
                        height: { xs: 30, sm: 40, md: 30 },
                    }}
                />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ marginTop: 2 }}
            >
                <Box
                    sx={{
                        width: "200px",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Avatar
                        alt="Profile Picture"
                        src="https://i.pravatar.cc/40"
                        sx={{ width: 50, height: 50, marginBottom: 4 }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button variant="outlined" color="primary" onClick={handleLogoutClick}>
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Popover>
            {/* Use ActionModal instead of ActionDialog */}
            <ActionModal open={modalOpen} onClose={handleCloseModal} />
        </Box>
    );
}

export default ProfilePopover;

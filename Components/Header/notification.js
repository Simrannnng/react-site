import React, { useState } from "react";
import { Box, IconButton, Popover, Card, CardContent, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function NotificationPopover() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleNotificationClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "notification-popover" : undefined;

    return (
        <Box>
            <IconButton color="inherit" onClick={handleNotificationClick}>
                <NotificationsNoneIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{ marginTop: 2 }}
            >
                <Box
                    sx={{
                        width: "300px",
                        padding: 2,
                        maxHeight: "350px",
                        overflow: "auto", 
                    }}
                >
                    <Card sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h6">Notification 1</Typography>
                            <Typography variant="body2">
                                You have a new message from Admin
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h6">Notification 2</Typography>
                            <Typography variant="body2">
                                Your task has been updated.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginBottom: 1 }}>
                        <CardContent>
                            <Typography variant="h6">Notification 3</Typography>
                            <Typography variant="body2">
                                New User has been added.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginBottom: 1 }}>
                        <CardContent>
                            <Typography variant="h6">Notification 4</Typography>
                            <Typography variant="body2">
                                New User has logged out.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ marginBottom: 1 }}>
                        <CardContent>
                            <Typography variant="h6">Notification 5</Typography>
                            <Typography variant="body2">
                                New User has been added.
                            </Typography>
                        </CardContent>
                    </Card>
                    
                </Box>
            </Popover>
        </Box>
    );
}

export default NotificationPopover;

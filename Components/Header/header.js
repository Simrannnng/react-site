import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/png/logo-colored 1.png"
import NotificationPopover from "./notification";
import ProfilePopover from "./profile";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box>
            <AppBar color="inherit" elevation={3} sx={{ height: { xs: "70px", sm: "90px" }, padding: "10px" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            "@media (max-width: 500px)": {
                                img: {
                                    width: "60px",
                                    height: "20px",
                                    marginLeft: "40px",
                                    marginRight: "30px",
                                },
                            },
                        }}
                    >
                        <img src={logo} alt="Logo" style={{ marginLeft: "20px", marginRight: "50px" }} />
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, flexGrow: 1 }}>
                        <Typography variant="button">Dashboard</Typography>
                        <Typography variant="button" color="textSecondary">
                            Social
                        </Typography>
                        <Typography variant="button" color="textSecondary">
                            Recruitment
                        </Typography>
                        <Typography variant="button" color="textSecondary">
                            Messages
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>

                        <NotificationPopover />
                        <ProfilePopover />
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)} sx={{ display: { xs: "block", md: "none" } }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List>
                    {["Dashboard", "Social", "Recruitment", "Messages"].map((text) => (
                        <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default Header;

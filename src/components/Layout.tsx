import React, {useState} from 'react';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography
} from "@mui/material";

import {Outlet} from "react-router-dom";
import {CustomDrawer} from "./CustomDrawer";
export const Layout = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <div style={{height: '2px'}}>
                    {/*{appStatus === "loading" && <LinearProgress color={'secondary'} />}*/}
                </div>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{color: 'black', cursor: 'pointer'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <CustomDrawer/>
            <Outlet/>
        </>
    );
};


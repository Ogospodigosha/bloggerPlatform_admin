import React, {useState} from 'react';
import {
    AppBar,
    CssBaseline, LinearProgress,
    Toolbar,
    Typography
} from "@mui/material";

import {Outlet} from "react-router-dom";
import {CustomDrawer} from "../CustomDrawer";
import {useSelector} from "react-redux";
import {appSelectors} from "./index";



export const Layout = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const appStatus = useSelector(appSelectors.selectAppStatus)
    return (
        <>
            <CssBaseline/>
            <AppBar position="fixed" color={"default"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <div style={{height: '2px'}}>
                    {appStatus === "loading" && <LinearProgress color={'secondary'} />}
                </div>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{color: 'black', cursor: 'pointer'}}>
                        Blogger Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{display: 'flex'}}>
                <CustomDrawer/>
              <div style={{width: '100%'}}><Outlet/></div>
            </div>

        </>
    );
};


import {AlertProps, Snackbar} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootState} from "../../app/store";
import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import {SetAppError} from "../../app/app-reducer";
import {useAppDispatch} from "../../utils/useAction";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const  CustomizedSnackbars = () => {
    const dispatch = useAppDispatch()
    debugger
    let error = useSelector<AppRootState, null| string>(state => state.app.error)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "ckickaway") {
            return;
        }
     dispatch(SetAppError({error: null}))
    };

    return (<>
            <Snackbar open={ error !== null} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    <span>{error}</span>
                </Alert>
            </Snackbar>
        </>
    );
}
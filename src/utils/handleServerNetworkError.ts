import {AxiosError} from "axios";
import {SetAppError, SetAppStatus} from "../app/app-reducer";
import {Dispatch} from "redux";



export const handleServerNetworkError = (e: any, dispatch: ErrorUtilsDispatchType) => {
    debugger
    const error = e as Error | AxiosError<{ error: string}>
    debugger

    dispatch(SetAppStatus({status: 'failed'}))
    // @ts-ignore
    if (error.response){
        // @ts-ignore
        dispatch(SetAppError(error.message ? {error: error.response.data.errorsMessages[0].message} : {error: 'Some error occurred'}))
    }
    if (error.message){
        dispatch(SetAppError({error: error.message}))
    }

}

type ErrorUtilsDispatchType = Dispatch
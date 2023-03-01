import {AxiosError} from "axios";
import {SetAppError, SetAppStatus} from "../app/app-reducer";
import {Dispatch} from "redux";



export const handleServerNetworkError = (e: any, dispatch: ErrorUtilsDispatchType) => {
    const error = e as Error | AxiosError<{ error: string}>
    // @ts-ignore
    dispatch(SetAppError(error.message ? {error: error.response.data.errorsMessages[0].message} : {error: 'Some error occurred'}))
    dispatch(SetAppStatus({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch
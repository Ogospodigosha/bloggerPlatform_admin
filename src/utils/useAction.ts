import {ThunkDispatch} from "redux-thunk";
import {AppRootState} from "../app/store";
import {ActionCreatorsMapObject, AnyAction, bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {useMemo} from "react";

type ThunkAppDispatchType = ThunkDispatch<AppRootState, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>()



export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useAppDispatch()
    const boundActions = useMemo(()=>{
        return bindActionCreators(actions, dispatch)
    },[])
    return boundActions
}
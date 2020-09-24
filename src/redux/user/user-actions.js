import {userActionType} from './user-types'
export const setCurrentUser = user =>{
    return { type:userActionType.SET_CURRENT_USER,payload: user}
};

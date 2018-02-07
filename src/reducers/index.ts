import {combineReducers} from 'redux';
import {userProfileReducer, UserProfileState} from './userProfiles';

export interface State {
    userProfileReducer: UserProfileState,
}

export const reducers = combineReducers({
    userProfileReducer,
});
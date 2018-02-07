import * as React from 'react';
import { BaseAction } from '../common/baseAction';
import { actionsEnums } from '../common/actionsEnums';

export interface UserProfileState {
    firstname: string;
}

const createDefaultUserProfileState = (): UserProfileState => ({
    firstname: 'test',
});

export const userProfileReducer = (
    state: UserProfileState = createDefaultUserProfileState(),
    action: BaseAction) => {
    switch (action.type) {
        case actionsEnums.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action.payload);
    }


    return state;
}

const handleUserProfileAction = (state: UserProfileState, newName: string) => ({
    ...state,
    firstname: newName
})

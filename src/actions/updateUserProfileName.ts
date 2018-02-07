import { actionsEnums } from '../common/actionsEnums';
import { BaseAction } from '../common/baseAction';

export const updateUserProfileName = (newName : string) : BaseAction => ({
    type: actionsEnums.UPDATE_USERPROFILE_NAME,
    payload: newName
});

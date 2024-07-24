import React from 'react';
import { UserProfileProps } from '../../users/profile/UserProfile';
import { FormFieldType, ActionType } from '../../../types';
export type CurrentUserProps = UserProfileProps & {
    enableEdit?: boolean;
    fields?: FormFieldType[];
    actions?: ActionType[];
};
declare const CurrentUser: React.FC<CurrentUserProps>;
export default CurrentUser;

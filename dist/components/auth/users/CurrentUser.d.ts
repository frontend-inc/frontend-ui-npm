import React from 'react';
import { UserProfileProps } from '../../users/profile/UserProfile';
import { FormFieldType, ButtonType } from '../../../types';
export type CurrentUserProps = UserProfileProps & {
    enableEdit?: boolean;
    fields?: FormFieldType[];
    buttons?: ButtonType[];
};
declare const CurrentUser: React.FC<CurrentUserProps>;
export default CurrentUser;

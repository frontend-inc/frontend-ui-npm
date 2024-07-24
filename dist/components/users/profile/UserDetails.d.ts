import React from 'react';
import { DetailsProps } from '../../cms/details/Details';
import { UserType } from 'frontend-js';
import { DisplayFieldType } from '../../../types';
export type UserDetailsProps = DetailsProps & {
    user: UserType;
    displayFields: DisplayFieldType[];
    url: string;
    enableBorder?: boolean;
};
declare const UserDetails: React.FC<UserDetailsProps>;
export default UserDetails;

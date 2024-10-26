import React from 'react';
import { DetailsProps } from '../../cms/details/Details';
import { DisplayFieldType } from '../../../types';
export type CurrentUserDetailsProps = DetailsProps & {
    displayFields: DisplayFieldType[];
    url: string;
    enableBorder?: boolean;
};
declare const CurrentUserDetails: React.FC<CurrentUserDetailsProps>;
export default CurrentUserDetails;

import React from 'react';
import { DetailsProps } from '../../cms/details/Details';
import { MetafieldType } from '../../../types';
export type CurrentUserDetailsProps = DetailsProps & {
    displayFields: MetafieldType[];
    url: string;
    enableBorder?: boolean;
};
declare const CurrentUserDetails: React.FC<CurrentUserDetailsProps>;
export default CurrentUserDetails;

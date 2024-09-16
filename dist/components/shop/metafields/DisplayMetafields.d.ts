import React from 'react';
import { DisplayFieldType } from '../../../types';
type DisplayMetafieldsProps = {
    fields: DisplayFieldType[];
    resource: any;
    enableTitle?: boolean;
    enableRatings?: boolean;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
};
declare const DisplayMetafields: React.FC<DisplayMetafieldsProps>;
export default DisplayMetafields;

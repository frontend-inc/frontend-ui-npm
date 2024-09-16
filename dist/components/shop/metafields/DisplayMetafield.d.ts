import React from 'react';
import { DisplayFieldType } from '../../../types';
type DisplayMetafieldProps = {
    field: DisplayFieldType;
    resource: any;
    disablePadding?: boolean;
};
declare const DisplayMetafield: React.FC<DisplayMetafieldProps>;
export default DisplayMetafield;

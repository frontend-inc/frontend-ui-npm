import React from 'react';
import { TypographyVariantsType } from '../../../types';
type AdminHeaderProps = {
    title?: string | React.ReactNode;
    buttons?: React.ReactNode;
    variant?: TypographyVariantsType;
    primaryActions?: React.ReactNode;
    secondaryActions?: React.ReactNode;
    disableBorder?: boolean;
    enableExpandLeftPanel?: boolean;
    enableExpandRightPanel?: boolean;
};
declare const AdminHeader: React.FC<AdminHeaderProps>;
export default AdminHeader;

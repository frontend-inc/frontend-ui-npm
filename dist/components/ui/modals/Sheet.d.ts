import React from 'react';
import { DrawerProps } from '@nextui-org/react';
type SheetProps = DrawerProps & {
    open: boolean;
    loading?: boolean;
    title?: string;
    side?: 'left' | 'right';
    handleClose: () => void;
    buttons?: React.ReactNode;
};
declare const Sheet: React.FC<SheetProps>;
export default Sheet;

import React from 'react';
import { UserType } from 'frontend-js';
type CellUserProps = {
    children: string;
    handleClick?: () => void;
    value?: UserType;
};
declare const CellUser: React.FC<CellUserProps>;
export default CellUser;

import React from 'react';
import { TypographyVariants } from '../../../types';
type CellExpandProps = {
    cell: React.ReactNode;
    cellExpanded: React.ReactNode;
    width?: number;
    variant?: TypographyVariants;
};
declare const CellExpand: React.FC<CellExpandProps>;
export default CellExpand;

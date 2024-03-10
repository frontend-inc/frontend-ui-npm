import React from 'react';
import { TypographyVariantsType } from '../../../types';
type CellExpandProps = {
    cell: React.ReactNode;
    cellExpanded: React.ReactNode;
    width?: number;
    variant?: TypographyVariantsType;
};
declare const CellExpand: React.FC<CellExpandProps>;
export default CellExpand;

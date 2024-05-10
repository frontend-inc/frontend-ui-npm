import React from 'react';
import { TeamType } from '../../../types';
type CellTeamProps = {
    children: string;
    handleClick?: () => void;
    value?: TeamType;
};
declare const CellTeam: React.FC<CellTeamProps>;
export default CellTeam;

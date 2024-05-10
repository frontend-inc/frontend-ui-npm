import React from 'react';
import { TeamType } from '../../../types';
type TeamListItemProps = {
    team: TeamType;
    selected?: boolean;
    isAdmin?: boolean;
    handleClick?: () => void | undefined;
    handleEdit: (team: TeamType) => void | undefined;
    handleDelete: (team: TeamType) => void | undefined;
};
declare const TeamListItem: React.FC<TeamListItemProps>;
export default TeamListItem;

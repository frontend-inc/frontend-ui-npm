import React from 'react';
import { TeamUserType } from '../../../types';
type TeamUserFormProps = {
    teamUser: TeamUserType;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
};
declare const TeamUserForm: React.FC<TeamUserFormProps>;
export default TeamUserForm;

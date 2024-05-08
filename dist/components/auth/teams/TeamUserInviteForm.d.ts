import React from 'react';
type TeamUserFormProps = {
    user: Record<string, any>;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
};
declare const TeamUserForm: React.FC<TeamUserFormProps>;
export default TeamUserForm;

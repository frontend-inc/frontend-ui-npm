import React from 'react';
type TeamFormProps = {
    loading: boolean;
    team: any;
    errors: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleSuccess: () => void;
    handleCancel: () => void;
    handleDeleteImage: () => void;
};
declare const TeamForm: React.FC<TeamFormProps>;
export default TeamForm;

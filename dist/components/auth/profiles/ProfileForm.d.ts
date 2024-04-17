import React from 'react';
export type ProfileFormProps = {
    buttonText?: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    resource: any;
    children?: React.ReactElement[];
};
declare const ProfileForm: React.FC<ProfileFormProps>;
export default ProfileForm;

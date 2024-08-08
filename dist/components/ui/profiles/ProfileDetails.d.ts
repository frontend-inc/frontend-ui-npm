import React from 'react';
type ProfileDetailsProps = {
    src: string;
    title: string;
    description: string;
    label?: string;
    buttons?: React.ReactNode;
    disableRing?: boolean;
};
declare const ProfileDetails: React.FC<ProfileDetailsProps>;
export default ProfileDetails;

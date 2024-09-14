import React from 'react';
export type ProfileProps = {
    src: string;
    title: string;
    description: string;
    label?: string;
    socialLinks?: {
        label: string;
        value: string;
        url: string;
    }[];
    buttons?: React.ReactNode;
    disableRing?: boolean;
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

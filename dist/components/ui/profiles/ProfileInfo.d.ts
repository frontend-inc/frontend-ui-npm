import React from 'react';
type ProfileInfoProps = {
    title: string;
    description: string;
    label?: string;
    socialLinks?: {
        label: string;
        value: string;
        url: string;
    }[];
};
declare const ProfileInfo: React.FC<ProfileInfoProps>;
export default ProfileInfo;

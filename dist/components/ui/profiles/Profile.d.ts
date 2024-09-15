import React from 'react';
export type ProfileProps = {
    image?: string;
    label?: string;
    title?: string;
    description?: string;
    socialLinks?: {
        value: string;
        provider: string;
        url: string;
    }[];
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

import React from 'react';
import { HeadingProps } from '../../../types';
export type ProfileProps = HeadingProps & {
    direction?: 'row' | 'column';
    image: string;
    description: string;
    socialLinks?: {
        provider: string;
        url: string;
    }[];
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

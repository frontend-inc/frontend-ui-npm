import React from 'react';
import { ActionType, DocumentType } from '../../../types';
export type ProfileProps = {
    fields: any[];
    url: string;
    enableBorder?: boolean;
    actions?: ActionType[];
    resource: DocumentType;
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

import React from 'react';
import { ActionType, DocumentType, FieldType } from '../../../types';
export type ProfileProps = {
    displayFields: FieldType[];
    fields: FieldType[];
    url: string;
    actions?: ActionType[];
    resource: DocumentType;
    enableBorder?: boolean;
    enableEdit?: boolean;
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

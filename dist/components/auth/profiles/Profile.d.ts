import React from 'react';
import { ActionType, DisplayFieldType, DocumentType, FormFieldType } from '../../../types';
export type ProfileProps = {
    displayFields: DisplayFieldType[];
    fields: FormFieldType[];
    url: string;
    actions?: ActionType[];
    resource: DocumentType;
    enableBorder?: boolean;
    enableEdit?: boolean;
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;

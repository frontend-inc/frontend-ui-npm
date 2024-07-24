import React from 'react';
import { SocialFieldType } from "../../../types";
export type SocialFieldsProps = {
    resource: any;
    fields: SocialFieldType[];
};
declare const SocialFields: React.FC<SocialFieldsProps>;
export default SocialFields;

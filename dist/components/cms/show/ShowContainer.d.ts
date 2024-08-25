import React from 'react';
import { FormFieldType } from '../../../types';
export type ShowContainerProps = {
    url: string;
    foreignUrl?: string;
    fields: FormFieldType[];
    children: React.ReactNode;
    resource: any;
};
declare const ShowContainer: React.FC<ShowContainerProps>;
export default ShowContainer;

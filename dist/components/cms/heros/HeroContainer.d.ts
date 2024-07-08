import React from 'react';
import { FormFieldType } from '../../../types';
export type HeroContainerProps = {
    url: string;
    fields: FormFieldType[];
    children: React.ReactNode;
    resource: any;
};
declare const HeroContainer: React.FC<HeroContainerProps>;
export default HeroContainer;

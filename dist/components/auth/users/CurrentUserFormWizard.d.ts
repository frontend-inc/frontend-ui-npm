import React from 'react';
export type CurrentUserFormWizardProps = {
    handle: string;
    variant?: 'contained' | 'outlined' | 'text';
    fields: any[];
    startTitle: string;
    startDescription: string;
    startImage: string;
    startButtonText?: string;
    buttonText?: string;
    image: string;
    endTitle: string;
    endDescription: string;
    endImage: string;
    endButtonText: string;
    href?: string;
};
declare const CurrentUserFormWizard: React.FC<CurrentUserFormWizardProps>;
export default CurrentUserFormWizard;

import React from 'react';
import { FormWizardProps } from '../../../components/cms/forms/FormWizard';
export type ProfileFormWizardProps = FormWizardProps & {
    resource: any;
};
declare const ProfileForm: React.FC<ProfileFormWizardProps>;
export default ProfileForm;

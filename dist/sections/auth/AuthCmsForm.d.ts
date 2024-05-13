import React from 'react';
import { CollectionFormProps } from '../../components/cms/forms/CollectionForm';
import { SectionProps } from '../../types';
type AuthCmsFormProps = SectionProps & CollectionFormProps;
declare const AuthCmsForm: React.FC<AuthCmsFormProps>;
export default AuthCmsForm;

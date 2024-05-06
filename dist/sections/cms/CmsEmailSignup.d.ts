import React from 'react';
import { EmailSignupProps } from '../../components/cms/contacts/EmailSignup';
import { SectionProps } from '../../types';
type CmsEmailSignupProps = SectionProps & EmailSignupProps;
declare const CmsEmailSignup: React.FC<CmsEmailSignupProps>;
export default CmsEmailSignup;

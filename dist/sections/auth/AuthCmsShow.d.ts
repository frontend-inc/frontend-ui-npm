import React from 'react';
import { ShowProps } from '../../components/cms/show/Show';
import { SectionProps } from '../../types';
type AuthCmsShowProps = SectionProps & ShowProps;
declare const AuthCmsShow: React.FC<AuthCmsShowProps>;
export default AuthCmsShow;

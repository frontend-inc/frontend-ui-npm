import React from 'react';
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection';
import { SectionProps, HeadingProps } from '../../types';
type AuthCmsForeignCollectionProps = SectionProps & HeadingProps & ForeignCollectionProps;
declare const AuthCmsForeignCollection: React.FC<AuthCmsForeignCollectionProps>;
export default AuthCmsForeignCollection;

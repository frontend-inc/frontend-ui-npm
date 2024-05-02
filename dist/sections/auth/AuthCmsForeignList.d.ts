import React from 'react';
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection';
import { SectionProps, HeadingProps } from '../../types';
type AuthCmsForeignListProps = SectionProps & HeadingProps & ForeignCollectionProps;
declare const AuthCmsForeignList: React.FC<AuthCmsForeignListProps>;
export default AuthCmsForeignList;

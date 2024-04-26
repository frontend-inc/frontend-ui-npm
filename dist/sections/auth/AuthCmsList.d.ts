import React from 'react';
import { CollectionProps } from '../../components/cms/collections/Collection';
import { SectionProps, HeadingProps } from '../../types';
type AuthCmsListProps = SectionProps & HeadingProps & CollectionProps;
declare const AuthCmsList: React.FC<AuthCmsListProps>;
export default AuthCmsList;

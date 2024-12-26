import React from 'react';
import { BlogListProps } from '../../components/cms/documents/BlogList';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & BlogListProps;
declare const CmsList: React.FC<CmsListProps>;
export default CmsList;

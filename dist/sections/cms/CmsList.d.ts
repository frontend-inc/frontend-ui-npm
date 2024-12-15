import React from 'react';
import { DocumentListProps } from '../../components/cms/documents/DocumentList';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & DocumentListProps;
declare const CmsList: React.FC<CmsListProps>;
export default CmsList;

import React from 'react';
import { ListProps } from '../../components/cms/collections/List';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & ListProps;
declare const CmsSimilar: React.FC<CmsListProps>;
export default CmsSimilar;

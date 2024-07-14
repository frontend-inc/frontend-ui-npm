import React from 'react';
import { ListProps } from '../../components/cms/collections/List';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & ListProps;
declare const CmsList: React.FC<CmsListProps>;
export default CmsList;

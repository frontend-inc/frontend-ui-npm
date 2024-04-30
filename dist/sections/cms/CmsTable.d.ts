import React from 'react';
import { CollectionTableProps } from '../../components/cms/collections/CollectionTable';
import { SectionProps, HeadingProps } from '../../types';
type CmsTableProps = SectionProps & HeadingProps & CollectionTableProps;
declare const CmsTable: React.FC<CmsTableProps>;
export default CmsTable;

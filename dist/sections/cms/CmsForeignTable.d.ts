import React from 'react';
import { ForeignCollectionTableProps } from '../../components/cms/collections/ForeignCollectionTable';
import { SectionProps, HeadingProps } from '../../types';
type CmsTableProps = SectionProps & HeadingProps & ForeignCollectionTableProps;
declare const CmsTable: React.FC<CmsTableProps>;
export default CmsTable;

import React from 'react';
import { ForeignCollectionTableProps } from '../../components/cms/collections/ForeignCollectionTable';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignTableProps = SectionProps & HeadingProps & ForeignCollectionTableProps;
declare const CmsForeignTable: React.FC<CmsForeignTableProps>;
export default CmsForeignTable;

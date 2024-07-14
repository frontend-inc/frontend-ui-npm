import React from 'react';
import { DataTableListProps } from '../../components/cms/collections/DataTableList';
import { SectionProps, HeadingProps } from '../../types';
type CmsTableProps = SectionProps & HeadingProps & DataTableListProps;
declare const CmsTable: React.FC<CmsTableProps>;
export default CmsTable;

import React from 'react';
import { KanBanListProps } from '../../components/cms/collections/KanBanList';
import { SectionProps, HeadingProps } from '../../types';
type CmsKanBanProps = SectionProps & HeadingProps & KanBanListProps;
declare const CmsKanBan: React.FC<CmsKanBanProps>;
export default CmsKanBan;

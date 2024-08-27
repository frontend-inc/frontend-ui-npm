import React from 'react';
import { KanBanListProps } from '../../components/cms/collections/KanBanList';
import { SectionProps, HeadingProps } from '../../types';
type CmsReferenceBanProps = SectionProps & HeadingProps & KanBanListProps;
declare const CmsReferenceKanBan: React.FC<CmsReferenceBanProps>;
export default CmsReferenceKanBan;

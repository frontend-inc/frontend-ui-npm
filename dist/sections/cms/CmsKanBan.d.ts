import React from 'react';
import { CollectionKanBanProps } from '../../components/cms/collections/CollectionKanBan';
import { SectionProps, HeadingProps } from '../../types';
type CmsKanBanProps = SectionProps & HeadingProps & CollectionKanBanProps;
declare const CmsKanBan: React.FC<CmsKanBanProps>;
export default CmsKanBan;

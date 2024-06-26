import React from 'react';
import { ForeignCollectionKanBanProps } from '../../components/cms/collections/ForeignCollectionKanBan';
import { SectionProps, HeadingProps } from '../../types';
type CmsForeignKanBanProps = SectionProps & HeadingProps & ForeignCollectionKanBanProps;
declare const CmsForeignKanBan: React.FC<CmsForeignKanBanProps>;
export default CmsForeignKanBan;

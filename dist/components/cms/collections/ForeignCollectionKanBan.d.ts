import React from 'react';
import { CollectionKanBanProps } from './CollectionKanBan';
export type ForeignCollectionKanBanProps = CollectionKanBanProps & {
    resource: any;
    url: string;
    foreignUrl: string;
    foreignContentType?: string;
};
declare const ForeignCollectionKanBan: React.FC<ForeignCollectionKanBanProps>;
export default ForeignCollectionKanBan;

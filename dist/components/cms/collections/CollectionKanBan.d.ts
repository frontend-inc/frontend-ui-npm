import React from 'react';
import { CollectionListProps } from './CollectionList';
import { TableHeaderType } from '../../../types';
export type CollectionKanBanProps = CollectionListProps & {
    headers?: TableHeaderType[];
};
declare const CollectionKanBan: React.FC<CollectionKanBanProps>;
export default CollectionKanBan;

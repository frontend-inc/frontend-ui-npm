import React from 'react';
import { CollectionListProps } from './CollectionList';
import { CollectionContainerProps } from './CollectionContainer';
export type CollectionProps = CollectionListProps & CollectionContainerProps;
declare const Collection: React.FC<CollectionProps>;
export default Collection;

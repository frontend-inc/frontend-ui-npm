import React from 'react';
import { CollectionListProps } from '../../cms/collections/CollectionList';
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer';
export type FeedProps = CollectionListProps & CollectionContainerProps;
declare const Feed: React.FC<FeedProps>;
export default Feed;

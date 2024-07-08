import React from 'react';
import { CollectionListProps } from '../../cms/collections/CollectionList';
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer';
export type LikesProps = CollectionListProps & CollectionContainerProps;
declare const Likes: React.FC<LikesProps>;
export default Likes;

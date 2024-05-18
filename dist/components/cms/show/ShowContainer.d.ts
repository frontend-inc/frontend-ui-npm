import React from 'react';
import { CollectionShowItemProps } from './CollectionShow';
type ShowContainerProps = CollectionShowItemProps & {
    children: React.ReactNode;
};
declare const ShowContainer: React.FC<ShowContainerProps>;
export default ShowContainer;

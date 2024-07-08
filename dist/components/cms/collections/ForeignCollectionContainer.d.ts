import React from 'react';
import { CollectionContainerProps } from './CollectionContainer';
export type ForeignProps = {
    resource: any;
};
export type ForeignCollectionContainerProps = CollectionContainerProps & ForeignProps;
declare const ForeignCollectionContainer: React.FC<ForeignCollectionContainerProps>;
export default ForeignCollectionContainer;

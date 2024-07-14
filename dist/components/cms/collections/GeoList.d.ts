import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type GeoListProps = ListItemsProps & ListContainerProps;
declare const GeoList: React.FC<GeoListProps>;
export default GeoList;

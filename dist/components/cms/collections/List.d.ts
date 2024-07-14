import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type ListProps = ListItemsProps & ListContainerProps;
declare const List: React.FC<ListProps>;
export default List;

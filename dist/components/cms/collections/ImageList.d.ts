import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type ImageListProps = ListItemsProps & ListContainerProps;
declare const ImageList: React.FC<ImageListProps>;
export default ImageList;

import React from 'react';
import { ListItemsProps } from './ListItems';
import { ListContainerProps } from './ListContainer';
export type VideoListProps = ListItemsProps & ListContainerProps;
declare const VideoList: React.FC<VideoListProps>;
export default VideoList;

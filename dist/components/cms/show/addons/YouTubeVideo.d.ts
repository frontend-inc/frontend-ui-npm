import React from 'react';
import { CollectionShowItemProps } from '../CollectionShow';
type YouTubeVideoProps = CollectionShowItemProps & {
    fieldName: string;
};
declare const YouTubeVideo: React.FC<YouTubeVideoProps>;
export default YouTubeVideo;

import React from 'react';
import { ShowItemProps } from '../Show';
type YouTubeVideoProps = ShowItemProps & {
    fieldName: string;
};
declare const YouTubeVideo: React.FC<YouTubeVideoProps>;
export default YouTubeVideo;

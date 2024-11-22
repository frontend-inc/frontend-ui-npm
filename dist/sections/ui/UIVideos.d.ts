import React from 'react';
import { VideosProps } from '../../components/web/videos/VideoList';
import { SectionProps, HeadingProps } from '../../types';
type UIVideosProps = SectionProps & HeadingProps & VideosProps;
declare const UIVideos: React.FC<UIVideosProps>;
export default UIVideos;

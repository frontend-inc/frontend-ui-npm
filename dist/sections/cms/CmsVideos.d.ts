import React from 'react';
import { VideoListProps } from '../../components/cms/collections/VideoList';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsVideosProps = SectionProps & HeadingProps & VideoListProps & FormProps;
declare const CmsVideos: React.FC<CmsVideosProps>;
export default CmsVideos;

import React from 'react';
import { VideoGridProps } from '../../components/cms/collections/VideoGrid';
import { SectionProps, HeadingProps, FormProps } from '../../types';
type CmsVideosProps = SectionProps & HeadingProps & VideoGridProps & FormProps;
declare const CmsVideos: React.FC<CmsVideosProps>;
export default CmsVideos;

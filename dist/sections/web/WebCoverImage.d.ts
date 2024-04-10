import React from 'react';
import { CoverImageProps } from '../../components/web/covers/CoverImage';
import { SectionProps } from '../../types';
type WebCoverImageProps = SectionProps & CoverImageProps;
declare const WebCoverImage: React.FC<WebCoverImageProps>;
export default WebCoverImage;

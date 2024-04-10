import React from 'react';
import { ImageProps } from '../../components/ui/images/Image';
import { SectionProps } from '../../types';
type WebImageProps = SectionProps & ImageProps;
declare const WebImage: React.FC<WebImageProps>;
export default WebImage;

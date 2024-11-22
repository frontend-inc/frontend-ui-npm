import React from 'react';
import { VideoCoverProps } from '../../components/web/covers/VideoCover';
import { SectionProps } from '../../types';
type UIVideoCoverProps = SectionProps & VideoCoverProps;
declare const UIVideoCover: React.FC<UIVideoCoverProps>;
export default UIVideoCover;

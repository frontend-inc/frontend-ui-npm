import React from 'react';
import { ShowItemProps } from '../Show';
type VimeoVideoProps = ShowItemProps & {
    fieldName: string;
};
declare const VimeoVideo: React.FC<VimeoVideoProps>;
export default VimeoVideo;

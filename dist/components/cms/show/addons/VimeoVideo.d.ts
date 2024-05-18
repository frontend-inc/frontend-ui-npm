import React from 'react';
import { CollectionShowItemProps } from '../CollectionShow';
type VimeoVideoProps = CollectionShowItemProps & {
    fieldName: string;
};
declare const VimeoVideo: React.FC<VimeoVideoProps>;
export default VimeoVideo;

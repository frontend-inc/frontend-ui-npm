import React from 'react';
import { ShowProps } from './ShowItem';
export type ShowVimeoProps = ShowProps & {
    fieldName: string;
};
declare const VimeoVideo: React.FC<ShowVimeoProps>;
export default VimeoVideo;

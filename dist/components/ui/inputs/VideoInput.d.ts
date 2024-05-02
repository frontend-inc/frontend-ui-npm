import React from 'react';
import { SyntheticEventType } from '../../../types';
type VideoInputProps = {
    name: string;
    label: string;
    value: {
        url: string;
    };
    handleChange: (e: SyntheticEventType) => void;
    handleBrowse: (name: string) => void;
    placeholder?: string;
    errors?: string;
};
declare const VideoInput: React.FC<VideoInputProps>;
export default VideoInput;

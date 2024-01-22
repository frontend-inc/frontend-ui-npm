import React from "react";
type VideoModalProps = {
    open: boolean;
    src: string;
    title?: string;
    handleClose: () => void;
    enableCopy?: boolean;
    enableDownload?: boolean;
};
declare const VideoModal: React.FC<VideoModalProps>;
export default VideoModal;

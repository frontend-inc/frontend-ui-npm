import React from 'react';
type MediaBrowserProps = {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (items: any[]) => void;
};
declare const MediaBrowser: React.FC<MediaBrowserProps>;
export default MediaBrowser;

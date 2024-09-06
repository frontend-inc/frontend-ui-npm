import React from 'react';
type MediaDrawerProps = {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (items: any[]) => void;
};
declare const MediaDrawer: React.FC<MediaDrawerProps>;
export default MediaDrawer;

import React from 'react';
export type SwirlVideosProps = {
    dataCode: string;
    dataPlaylistCode: string;
    serverType?: 'development' | 'prod';
};
declare const SwirlVideos: React.FC<SwirlVideosProps>;
export default SwirlVideos;

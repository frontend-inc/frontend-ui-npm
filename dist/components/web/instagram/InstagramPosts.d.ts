import React from 'react';
type InstagramPostType = {
    embed?: any;
};
export type InstagramPostProps = {
    items: InstagramPostType[];
};
declare const InstagramPosts: React.FC<InstagramPostProps>;
export default InstagramPosts;

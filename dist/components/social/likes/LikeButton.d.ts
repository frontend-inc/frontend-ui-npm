import React from 'react';
type LikeButtonProps = {
    resource: any;
    size?: 'small' | 'large';
    color?: string;
    numLikes?: number;
};
declare const LikeButton: React.FC<LikeButtonProps>;
export default LikeButton;

import React from 'react';
type LikeButtonProps = {
    handle: string | number;
    variant?: 'icon' | 'button';
    numLikes?: number;
};
declare const LikeButton: React.FC<LikeButtonProps>;
export default LikeButton;

import React from 'react';
type LikeButtonProps = {
    handle: string | number;
    variant?: 'icon' | 'button';
    color?: string;
    numLikes?: number;
};
declare const LikeButton: React.FC<LikeButtonProps>;
export default LikeButton;

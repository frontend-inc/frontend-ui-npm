import React from 'react';
type SocialCardButtonsProps = {
    item: any;
    handleFavorite: (item: any) => void;
    handleShare: (item: any) => void;
    handleComment: (item: any) => void;
    isFavoriteFn?: (user: any, item: any) => boolean;
};
declare const SocialCardButtons: React.FC<SocialCardButtonsProps>;
export default SocialCardButtons;

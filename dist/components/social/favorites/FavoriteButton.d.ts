import React from 'react';
type FavoriteButtonProps = {
    handle: string;
    variant?: 'icon' | 'button';
    numFavorites?: number;
};
declare const FavoriteButton: React.FC<FavoriteButtonProps>;
export default FavoriteButton;

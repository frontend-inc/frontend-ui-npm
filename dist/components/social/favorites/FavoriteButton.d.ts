import React from 'react';
type FavoriteButtonProps = {
    resource: any;
    size?: 'small' | 'large';
    color?: string;
    numFavorites?: number;
};
declare const FavoriteButton: React.FC<FavoriteButtonProps>;
export default FavoriteButton;

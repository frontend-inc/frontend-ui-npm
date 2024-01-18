import React from 'react';
type FavoritesProps = {
    layout?: 'list' | 'grid' | 'carousel';
    style?: 'card' | 'avatar' | 'image' | 'cover' | 'chip';
    field: any;
    url: string;
    handle: string;
    navigateUrl?: any;
    foreignUrl?: string;
    perPage?: number;
    query?: any;
    editing?: boolean;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Favorites: React.FC<FavoritesProps>;
export default Favorites;

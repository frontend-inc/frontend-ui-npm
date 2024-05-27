import React from 'react';
type FavoritesProps = {
    variant?: 'list' | 'grid';
    style?: 'card' | 'avatar' | 'cover';
    field: any;
    url: string;
    handle: string;
    href?: any;
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

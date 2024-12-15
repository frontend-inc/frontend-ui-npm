import React from 'react';
type CollectionListItemProps = {
    resource: any;
    handleClick: () => void;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const CollectionListItem: React.FC<CollectionListItemProps>;
export default CollectionListItem;

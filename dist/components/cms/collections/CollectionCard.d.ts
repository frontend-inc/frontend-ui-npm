import React from 'react';
export type CollectionCardProps = {
    ref?: React.Ref<HTMLDivElement>;
    avatar?: React.ReactNode;
    image: string;
    label?: string;
    primary: string;
    secondary?: string | React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    compareAtPrice?: string;
    handleClick?: () => void;
    addToCart?: React.ReactNode;
    disableBorder?: boolean;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const CollectionCard: React.ForwardRefExoticComponent<Omit<CollectionCardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default CollectionCard;

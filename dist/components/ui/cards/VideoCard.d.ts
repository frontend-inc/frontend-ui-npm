import React from 'react';
export type CardProps = {
    avatar?: React.ReactNode;
    primary?: string;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    image?: string;
    slots?: {
        item?: any;
        image?: any;
    };
};
export default function VideoCard({ avatar, primary, secondaryAction, handleClick, image, slots, }: CardProps): React.JSX.Element;

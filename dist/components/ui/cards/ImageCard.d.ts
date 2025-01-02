import React from 'react';
export type CardProps = {
    primary?: string;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    height?: number;
    image?: string;
    slots?: {
        image?: any;
    };
};
export default function ImageCard(props: CardProps): React.JSX.Element;

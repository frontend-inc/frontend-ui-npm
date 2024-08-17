import React from 'react';
type SimpleCardProps = {
    item?: any;
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
declare const Card: React.FC<SimpleCardProps>;
export default Card;

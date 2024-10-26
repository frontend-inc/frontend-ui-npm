import React from 'react';
type UnplashCardProps = {
    image?: any;
    selected?: boolean;
    handleClick?: (image: any) => void;
};
declare const UnplashCard: React.FC<UnplashCardProps>;
export default UnplashCard;

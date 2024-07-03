import React from 'react';
type BuyNowButtonProps = {
    size?: 'small' | 'medium' | 'large';
    resource: any;
    buttonText?: string;
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
};
declare const BuyNowButton: React.FC<BuyNowButtonProps>;
export default BuyNowButton;

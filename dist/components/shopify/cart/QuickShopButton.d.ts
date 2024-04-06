import React from 'react';
type QuickShopButtonProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    buttonText?: string;
    quickShopButtonText?: string;
    product?: any;
    enableQuantity?: boolean;
};
declare const QuickShopButton: React.FC<QuickShopButtonProps>;
export default QuickShopButton;

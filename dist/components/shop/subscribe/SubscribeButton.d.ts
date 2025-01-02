import React from 'react';
type SusbcribeButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    productId: string | number;
    fullWidth?: boolean;
    buttonText?: string;
    availableForSale?: boolean;
    price?: string;
    className?: string;
};
declare const SusbcribeButton: (props: SusbcribeButtonProps) => React.JSX.Element;
export default SusbcribeButton;

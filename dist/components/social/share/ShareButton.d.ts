import React from 'react';
type ShareButtonProps = {
    url: string;
    size?: 'small' | 'large';
    variant?: 'rounded' | 'circular';
};
export default function ShareButton({ url, variant, size, }: ShareButtonProps): React.JSX.Element;
export {};

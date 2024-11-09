import React from 'react';
export type TextProps = {
    title: string;
    description: string;
    label?: string;
    textAlign?: 'center' | 'left';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    html?: boolean;
};
declare const Text: React.FC<TextProps>;
export default Text;

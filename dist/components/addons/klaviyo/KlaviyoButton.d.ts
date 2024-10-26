import React from 'react';
export type KlaviyoButtonProps = {
    formId?: string;
    justifyContent?: string;
    buttonText?: string;
    variant?: 'default' | 'secondary' | 'ghost' | 'link';
};
declare const KlaviyoButton: React.FC<KlaviyoButtonProps>;
export default KlaviyoButton;

import React from 'react';
type AiButtonProps = {
    loading?: boolean;
    icon?: string;
    title?: string;
    description?: string;
    handleClick: () => void;
};
declare const AiButton: React.FC<AiButtonProps>;
export default AiButton;

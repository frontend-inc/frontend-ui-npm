import React from 'react';
type TextModalProps = {
    open: boolean;
    text: string;
    title?: string;
    handleClose: () => void;
};
declare const TextModal: React.FC<TextModalProps>;
export default TextModal;

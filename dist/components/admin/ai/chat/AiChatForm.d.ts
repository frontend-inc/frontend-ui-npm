import React from 'react';
type AiChatFormProps = {
    id?: string;
    open: boolean;
    prompt: string;
    handleClick: (text: string) => void;
    messages: any[];
    setMessages: any;
    input: string;
    handleInputChange: any;
};
declare const AiChatForm: React.FC<AiChatFormProps>;
export default AiChatForm;

import React from 'react';
type AiChatFormProps = {
    id?: string;
    label?: string;
    prompt: string;
    setMessages: any;
    input: string;
    handleInputChange: any;
};
declare const AiChatForm: React.FC<AiChatFormProps>;
export default AiChatForm;

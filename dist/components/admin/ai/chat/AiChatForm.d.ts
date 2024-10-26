import React from 'react';
type AiChatFormProps = {
    id?: string;
    open: boolean;
    prompt: string;
    handleClick: (text: string) => void;
    messages: any[];
    setMessages: React.Dispatch<React.SetStateAction<any[]>>;
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const AiChatForm: React.FC<AiChatFormProps>;
export default AiChatForm;

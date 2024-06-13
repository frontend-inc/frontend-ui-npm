import React from 'react';
import { AIChatProps } from '../../components/ai/chat/AIChat';
import { SectionProps } from '../../types';
type OpenAIChatProps = SectionProps & AIChatProps;
declare const OpenAIChat: React.FC<OpenAIChatProps>;
export default OpenAIChat;

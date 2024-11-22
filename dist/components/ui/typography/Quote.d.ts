import React from 'react';
export type QuoteProps = {
    text: string;
    author?: string;
    className?: string;
};
declare const Quote: React.FC<QuoteProps>;
export default Quote;

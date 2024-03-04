import React from 'react';
type SectionProps = {
    children: React.ReactNode;
    title?: string;
    textAlign?: 'left' | 'center';
    bgcolor?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
    py?: number;
};
declare const Section: React.FC<SectionProps>;
export default Section;

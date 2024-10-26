import React from 'react';
interface FadeProps {
    children: React.ReactNode;
    in?: boolean;
    duration?: number;
    className?: string;
}
declare const Fade: React.FC<FadeProps>;
export { Fade };

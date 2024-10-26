import React from 'react';
type LogoProps = {
    src: string;
    width?: number;
    height?: number;
    handleClick: (path: string) => void;
};
declare const Logo: React.FC<LogoProps>;
export default Logo;

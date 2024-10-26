import React from 'react';
type LogoProps = {
    src: string;
    width?: number;
    height?: number;
    handleClick: (path: string) => void;
};
export default function Logo({ src, width, height, handleClick, }: LogoProps): React.JSX.Element;
export {};

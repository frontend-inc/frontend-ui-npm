import React from 'react';
type LogoProps = {
    src: string;
    width?: number;
    height?: number;
    handleClick: (path: string) => void;
};
export default function Logo(props: LogoProps): React.JSX.Element;
export {};

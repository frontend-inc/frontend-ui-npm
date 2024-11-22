import React from 'react';
interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClick?: () => void;
}
export declare function Backdrop(props: BackdropProps): React.JSX.Element;
export {};

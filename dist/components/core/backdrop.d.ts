import React from 'react';
interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClick?: () => void;
}
declare const Backdrop: ({ children, open, onClick, className, ...props }: BackdropProps) => React.JSX.Element;
export { Backdrop };

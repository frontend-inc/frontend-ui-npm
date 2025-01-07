import React from 'react';
interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClick?: () => void;
}
declare const Backdrop: (props: BackdropProps) => React.JSX.Element;
export default Backdrop;

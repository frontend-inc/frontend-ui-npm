import React from 'react';
export type ContainerProps = {
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    children: React.ReactNode;
    className?: string;
};
declare const Container: React.FC<ContainerProps>;
export default Container;

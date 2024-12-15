import React from 'react';
export interface AnimatedListProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}
export declare const AnimatedList: React.MemoExoticComponent<({ className, children, delay }: AnimatedListProps) => React.JSX.Element>;
export declare function AnimatedListItem({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;

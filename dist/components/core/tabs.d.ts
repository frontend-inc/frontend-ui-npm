import React from 'react';
interface TabProps {
    label: string;
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
}
interface TabsProps {
    children: React.ReactElement<TabProps>[];
    defaultValue?: string;
    className?: string;
    onChange?: (value: string) => void;
}
export declare const Tab: React.FC<TabProps>;
export declare const Tabs: React.FC<TabsProps>;
export {};

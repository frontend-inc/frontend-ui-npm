import React from 'react';
type AuthScreenProps = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
};
export default function AuthScreen({ title, subtitle, children, }: AuthScreenProps): React.JSX.Element;
export {};

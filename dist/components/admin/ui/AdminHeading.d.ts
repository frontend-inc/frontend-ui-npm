import React from 'react';
interface AdminHeadingProps {
    title: string;
    description?: string;
    secondaryAction?: React.ReactNode;
}
export default function AdminHeading({ title, description, secondaryAction, }: AdminHeadingProps): React.JSX.Element;
export {};

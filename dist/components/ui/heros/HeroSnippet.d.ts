import React from 'react';
type HeroCardProps = {
    label: string;
    image: string;
    primary?: string;
    secondary: React.ReactNode;
    actions?: React.ReactNode;
};
type HeroSnippetProps = HeroCardProps & {
    circular?: boolean;
    disableImage?: boolean;
    slots?: {
        image?: any;
    };
};
export default function HeroSnippet({ label, image, primary, secondary, actions, disableImage, circular, slots, }: HeroSnippetProps): React.JSX.Element;
export {};

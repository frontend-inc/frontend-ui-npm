import React, { ReactNode } from "react";
declare const BentoGrid: ({ children, className, }: {
    children: ReactNode;
    className?: string;
}) => React.JSX.Element;
declare const BentoCard: ({ name, className, background, Icon, description, href, cta, }: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => React.JSX.Element;
export { BentoCard, BentoGrid };

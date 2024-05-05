import React from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
    color?: string;
    size?: number;
}
declare const LucideIcon: React.FC<IconProps>;
export default LucideIcon;

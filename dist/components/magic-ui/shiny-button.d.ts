import React from 'react';
import { type HTMLMotionProps } from 'framer-motion';
interface ShinyButtonProps extends HTMLMotionProps<'button'> {
    children: React.ReactNode;
    className?: string;
}
declare const ShinyButton: React.ForwardRefExoticComponent<ShinyButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default ShinyButton;

import { FC, ReactNode } from "react";
interface AnimatedShinyTextProps {
    children: ReactNode;
    className?: string;
    shimmerWidth?: number;
}
declare const AnimatedShinyText: FC<AnimatedShinyTextProps>;
export default AnimatedShinyText;

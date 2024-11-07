import React from "react";
interface Props {
    max: number;
    value: number;
    min: number;
    gaugePrimaryColor: string;
    gaugeSecondaryColor: string;
    className?: string;
}
export default function AnimatedCircularProgressBar({ max, min, value, gaugePrimaryColor, gaugeSecondaryColor, className, }: Props): React.JSX.Element;
export {};

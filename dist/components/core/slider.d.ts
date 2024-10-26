import React from 'react';
interface SliderProps {
    name: string;
    value: number[];
    handleChange: (value: number[]) => void;
    errors?: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export { Slider };

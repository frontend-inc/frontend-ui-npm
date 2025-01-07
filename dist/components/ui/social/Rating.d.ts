import React from 'react';
interface RatingProps {
    name?: string;
    value: number;
    onChange?: (value: number) => void;
    max?: number;
    precision?: 0.5 | 1;
    size?: 'sm' | 'md' | 'lg';
    readOnly?: boolean;
    disabled?: boolean;
    className?: string;
}
declare function Rating({ name, value, onChange, max, precision, size, readOnly, disabled, className, }: RatingProps): React.JSX.Element;
export default Rating;

import React from 'react';
export default function NumberTicker({ value, direction, delay, className, decimalPlaces, }: {
    value: number;
    direction?: 'up' | 'down';
    className?: string;
    delay?: number;
    decimalPlaces?: number;
}): React.JSX.Element;

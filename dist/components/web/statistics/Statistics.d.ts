import React from 'react';
export type StatisticsProps = {
    variant?: 'fill' | 'outline' | 'default';
    items: {
        icon?: any;
        title?: string;
        subtitle?: string;
    }[];
    direction?: 'column' | 'row';
};
declare const Statistics: React.FC<StatisticsProps>;
export default Statistics;

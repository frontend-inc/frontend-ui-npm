import React from 'react';
export type StatisticProps = {
    value: number;
    label: string;
    icon?: any;
    direction?: 'row' | 'column';
    enableBorder?: boolean;
};
export declare const Statistic: React.FC<StatisticProps>;
export default Statistic;

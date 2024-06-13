import React from 'react';
export type StatisticsProps = {
    layout?: 'row' | 'column';
    url: string;
    query?: any;
    direction?: 'row' | 'column';
    metaFields: {
        icon?: any;
        label: string;
        value: 'total' | 'current_day' | '1_day_ago' | '7_days_ago' | '30_days_ago';
    }[];
    enableBorder?: boolean;
};
declare const Statistics: React.FC<StatisticsProps>;
export default Statistics;

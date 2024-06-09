import React from 'react';
type AvgRatingProps = {
    resource: any;
    enableTotal?: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline';
};
declare const AvgRating: React.FC<AvgRatingProps>;
export default AvgRating;

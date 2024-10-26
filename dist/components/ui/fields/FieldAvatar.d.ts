import React from 'react';
import { FieldElementProps } from './Field';
type FieldAvatarProps = FieldElementProps & {
    size?: number;
    variant?: 'circle' | 'rounded';
};
declare const FieldAvatar: React.FC<FieldAvatarProps>;
export default FieldAvatar;

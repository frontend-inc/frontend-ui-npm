import React from 'react';
type TouchableOpacityProps = {
    children: any;
    handleClick?: () => void;
    disableRipple?: boolean;
    disableBorderRadius?: boolean;
    justifyContent?: string;
};
declare const TouchableOpacity: React.FC<TouchableOpacityProps>;
export default TouchableOpacity;

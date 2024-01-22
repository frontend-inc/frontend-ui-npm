import React from "react";
type TouchableOpacityProps = {
  children: any;
  handleClick: (item: any) => void;
  disableRipple?: boolean;
  justifyContent?: string;
};
declare const TouchableOpacity: React.FC<TouchableOpacityProps>;
export default TouchableOpacity;

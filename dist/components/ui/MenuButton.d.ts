import React from "react";
type MenuButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "small" | "medium";
  selected?: boolean;
};
declare const MenuButton: React.FC<MenuButtonProps>;
export default MenuButton;

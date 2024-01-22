import React from "react";
type UserMenuProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  toggleMenu: (ev: any) => void;
  handleLogoutClick: () => void;
  handleClick: (path: string) => void;
};
declare const UserMenu: React.FC<UserMenuProps>;
export default UserMenu;

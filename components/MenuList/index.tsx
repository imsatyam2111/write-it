import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

interface IMenuListTypes {
  key: number;
  label: string;
}

interface IMenuPropTypes {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  menuList: Array<IMenuListTypes>;
}

export const MenuList = (props: IMenuPropTypes) => {
  const { anchorEl, setAnchorEl, menuList } = props;
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuList.map((list) => (
          <MenuItem key={list.key} onClick={handleClose}>
            {list.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

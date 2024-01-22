import React from "react";
import {
  Box,
  Stack,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  MenuItem,
} from "@mui/material";
import { Label, MenuButton } from "../../components";
import { Trash, Edit } from "lucide-react";

type ListItemProps = {
  primary: string;
  secondary?: string;
  label?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  showMenu?: boolean;
  handleClick?: (item: any) => void;
  handleEdit?: (item: any) => void;
  handleDelete?: (item: any) => void;
};

const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    primary,
    secondary,
    label,
    icon,
    showMenu,
    handleClick,
    handleEdit,
    handleDelete,
    selected,
  } = props;

  return (
    <MuiListItem
      sx={{
        ...sx.listItem,
        ...(selected && sx.selected),
      }}
      disablePadding
      secondaryAction={
        <Stack direction="row" spacing={1}>
          {label && <Label label={label} />}
          <Box sx={sx.menuItems}>
            {showMenu && (
              <MenuButton selected>
                {handleEdit && (
                  <MenuItem onClick={handleEdit}>
                    <ListItemIcon>
                      <Edit size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                  </MenuItem>
                )}
                {handleDelete && (
                  <MenuItem onClick={handleDelete}>
                    <ListItemIcon>
                      <Trash size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                  </MenuItem>
                )}
              </MenuButton>
            )}
          </Box>
        </Stack>
      }
    >
      <ListItemButton sx={sx.listItemButton} onClick={handleClick}>
        {icon && <ListItemIcon sx={sx.listItemIcon}>{icon}</ListItemIcon>}
        <ListItemText primary={primary} secondary={secondary} />
      </ListItemButton>
    </MuiListItem>
  );
};

export default ListItem;

const sx = {
  listItem: {
    borderRadius: (theme) => theme.shape.borderRadius,
    height: "40px",
    width: "100%",
    "&:hover .MuiBox-root": {
      display: "block",
    },
    my: "2px",
  },
  listItemButton: {
    height: "40px",
    borderRadius: (theme) => theme.shape.borderRadius,
  },
  selected: {
    fontWeight: 500,
    bgcolor: "primary.main",
    color: "primary.contrastText",
    "&:hover": {
      opacity: 1.0,
    },
  },
  menuItems: {
    display: "none",
  },
  listItemIcon: {
    minWidth: "30px",
  },
};

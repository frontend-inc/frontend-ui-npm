import React, { useState } from "react";
import {
  Box,
  List as MuiList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { TypographyVariants } from "../../types";

type ListProps = {
  expandable?: boolean;
  title?: string;
  icon?: React.ReactNode;
  children: any;
  enableBorder?: boolean;
  closed?: boolean;
  variant?: TypographyVariants;
  actions?: React.ReactNode;
};

const List: React.FC<ListProps> = (props) => {
  const {
    title,
    variant = "overline",
    expandable = true,
    enableBorder,
    children,
    closed = false,
    actions,
  } = props;

  const [open, setOpen] = useState(!closed);
  const handleToggleClick = () => {
    if (expandable) setOpen(!open);
  };

  return (
    <MuiList
      sx={{
        ...sx.root,
        ...(enableBorder && sx.borderTop),
      }}
    >
      {title && (
        <ListItem
          sx={sx.listItem}
          disablePadding={expandable}
          secondaryAction={actions && actions}
        >
          <ListItemButton
            sx={sx.listItemButton}
            disableRipple
            onClick={handleToggleClick}
          >
            {expandable && (
              <ListItemIcon sx={sx.listItemIcon}>
                <IconButton onClick={handleToggleClick}>
                  <ChevronRight
                    sx={{
                      ...sx.icon,
                      ...(open && sx.expandMore),
                    }}
                  />
                </IconButton>
              </ListItemIcon>
            )}
            {title && (
              <ListItemText
                primary={
                  <Typography sx={sx.title} variant={variant}>
                    {title}
                  </Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={sx.content}>{children}</Box>
      </Collapse>
    </MuiList>
  );
};

export default List;

const sx = {
  root: {
    width: "100%",
  },
  listItem: {
    height: "40px",
  },
  listItemButton: {
    p: 0,
    height: "40px",
  },
  listItemIcon: {
    minWidth: "40px",
    width: "40px",
  },
  title: {
    py: 0,
    lineHeight: "1em",
    color: "text.primary",
  },
  icon: {
    transition: "transform 0.3s ease-in-out",
  },
  expandMore: {
    transform: "rotate(90deg)",
  },
  borderTop: {
    borderTop: "1px solid",
    borderColor: "divider",
  },
  content: {
    px: 1,
  },
};

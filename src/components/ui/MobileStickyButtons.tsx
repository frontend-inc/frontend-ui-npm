import React from "react";
import { Box } from "@mui/material";

type MobileStickyButtonsProps = {
  children: React.ReactNode;
  flexDirection?: {
    xs: "row" | "column";
    sm: "row" | "column";
  };
};

const MobileStickyButtons: React.FC<MobileStickyButtonsProps> = (props) => {
  const {
    children,
    flexDirection = {
      xs: "row",
      sm: "column",
    },
  } = props;

  return (
    <Box
      sx={{
        ...sx.root,
        flexDirection,
      }}
    >
      {children}
    </Box>
  );
};

export default MobileStickyButtons;

const sx = {
  root: {
    zIndex: (theme) => theme.zIndex.appBar,
    width: {
      sm: "100%",
      xs: "100vw",
    },
    display: "flex",
    flexDirection: {
      xs: "row",
      sm: "column",
    },
    gap: "5px",
    position: {
      xs: "fixed",
      sm: "relative",
    },
    bottom: {
      sm: "auto",
      xs: "70px",
    },
    bgcolor: {
      xs: "background.paper",
      sm: "transparent",
    },
    boxShadow: {
      sm: "none",
      xs: `0px 0px 3px 2px rgb(120 120 175 / 20%)`,
    },
    p: {
      sm: 0,
      xs: 1,
    },
    left: {
      sm: "auto",
      xs: 0,
    },
    alignItems: {
      sm: "flex-end",
      xs: "center",
    },
    justifyContent: {
      sm: "flex-end",
      xs: "space-between",
    },
  },
};

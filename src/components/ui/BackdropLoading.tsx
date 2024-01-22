import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

type BackdropLoadingProps = {
  loading?: boolean;
};

const BackdropLoading: React.FC<BackdropLoadingProps> = (props) => {
  const { loading = false } = props;
  return (
    <Backdrop sx={sx.root} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoading;

const sx = {
  root: {
    color: "#fff",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  },
};

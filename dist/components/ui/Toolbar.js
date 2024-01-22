"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var Toolbar = function (props) {
  var open = props.open,
    handleClose = props.handleClose,
    children = props.children;
  return react_1.default.createElement(
    material_1.Slide,
    { in: open, direction: "up" },
    react_1.default.createElement(
      material_1.Box,
      { sx: sx.root },
      react_1.default.createElement(material_1.Box, { sx: sx.leftIcon }),
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.buttons },
        children
      ),
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.rightIcon },
        react_1.default.createElement(
          material_1.IconButton,
          { sx: sx.button, onClick: handleClose },
          react_1.default.createElement(lucide_react_1.X, null)
        )
      )
    )
  );
};
exports.default = Toolbar;
var sx = {
  root: {
    zIndex: function (theme) {
      return theme.zIndex.appBar;
    },
    bgcolor: "background.paper",
    bottom: 0,
    left: {
      sm: 1,
      xs: 0,
    },
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0.5,
    borderTop: "1px solid",
    borderColor: "divider",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  leftIcon: {
    width: 44,
    display: "flex",
    justifyContent: "flex-start",
  },
  rightIcon: {
    width: 44,
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {},
};

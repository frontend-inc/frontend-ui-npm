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
var CellLink = function (props) {
  var value = props.value,
    handleClick = props.handleClick;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.cell },
    value &&
      react_1.default.createElement(
        material_1.Button,
        {
          size: "small",
          variant: "outlined",
          sx: sx.button,
          startIcon: react_1.default.createElement(
            lucide_react_1.ExternalLink,
            { size: 20 }
          ),
          onClick: handleClick,
        },
        value
      )
  );
};
exports.default = CellLink;
var sx = {
  button: {
    textTransform: "none",
    fontFamily: function (theme) {
      return theme.typography.body2.fontFamily;
    },
    letterSpacing: 0,
  },
  cell: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    p: "0.5rem",
  },
  icon: {
    height: 20,
    width: 20,
    color: "icon",
  },
};

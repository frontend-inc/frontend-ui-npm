"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../components");
var SquareButton = function (props) {
  var icon = props.icon,
    label = props.label,
    title = props.title,
    handleClick = props.handleClick,
    _a = props.selected,
    selected = _a === void 0 ? false : _a;
  return react_1.default.createElement(
    material_1.CardActionArea,
    { sx: sx.cardActionArea, onClick: handleClick ? handleClick : null },
    react_1.default.createElement(
      material_1.Box,
      { sx: __assign(__assign({}, sx.item), selected && sx.selected) },
      icon &&
        react_1.default.createElement(material_1.Box, { sx: sx.icon }, icon),
      title &&
        react_1.default.createElement(
          material_1.Typography,
          { variant: "body2", color: "text.primary" },
          title
        ),
      label &&
        react_1.default.createElement(components_1.Label, { label: label })
    )
  );
};
exports.default = SquareButton;
var sx = {
  cardActionArea: {
    p: 0,
    minWidth: "100px",
  },
  selected: {
    border: "2px solid",
    borderColor: "primary.main",
  },
  item: {
    py: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: function (theme) {
      return theme.shape.borderRadius;
    },
    boxShadow: 0,
    width: "100%",
    border: "1px solid",
    borderColor: "divider",
    bgcolor: "background.paper",
    "&:hover": {
      borderColor: "primary.main",
    },
  },
  icon: {
    mt: 1,
  },
};

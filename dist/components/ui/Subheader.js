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
var hooks_1 = require("../../hooks");
var material_1 = require("@mui/material");
var Subheader = function (props) {
  var title = props.title,
    buttons = props.buttons,
    _a = props.mb,
    mb = _a === void 0 ? 2 : _a;
  var isMobile = (0, hooks_1.useResponsive)().isMobile;
  return react_1.default.createElement(
    material_1.Box,
    { sx: __assign(__assign({}, sx.root), { mb: mb }) },
    react_1.default.createElement(
      material_1.Box,
      {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      react_1.default.createElement(
        material_1.Box,
        { ml: isMobile ? 6 : 3, mt: 1.5 },
        react_1.default.createElement(
          material_1.Typography,
          { color: "textPrimary", variant: "h4" },
          title
        )
      )
    ),
    react_1.default.createElement(
      material_1.Box,
      { display: "flex", justifyContent: "flex-end" },
      buttons &&
        buttons.map(function (button, i) {
          return react_1.default.createElement(
            material_1.Box,
            { m: 1, key: i },
            button
          );
        })
    )
  );
};
exports.default = Subheader;
var sx = {
  root: {
    position: "relative",
    height: 52,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    bgcolor: "background.paper",
    borderBottom: "1px solid",
    borderColor: "divider",
    boxShadow: function (theme) {
      return "0px 0px 4px 0px ".concat(theme.palette.divider);
    },
    background: function (theme) {
      return "linear-gradient(#fff, ".concat(
        theme.palette.background.paper,
        ")"
      );
    },
  },
};

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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var List = function (props) {
  var title = props.title,
    _a = props.variant,
    variant = _a === void 0 ? "overline" : _a,
    _b = props.expandable,
    expandable = _b === void 0 ? true : _b,
    enableBorder = props.enableBorder,
    children = props.children,
    _c = props.closed,
    closed = _c === void 0 ? false : _c,
    actions = props.actions;
  var _d = (0, react_1.useState)(!closed),
    open = _d[0],
    setOpen = _d[1];
  var handleToggleClick = function () {
    if (expandable) setOpen(!open);
  };
  return react_1.default.createElement(
    material_1.List,
    { sx: __assign(__assign({}, sx.root), enableBorder && sx.borderTop) },
    title &&
      react_1.default.createElement(
        material_1.ListItem,
        {
          sx: sx.listItem,
          disablePadding: expandable,
          secondaryAction: actions && actions,
        },
        react_1.default.createElement(
          material_1.ListItemButton,
          {
            sx: sx.listItemButton,
            disableRipple: true,
            onClick: handleToggleClick,
          },
          expandable &&
            react_1.default.createElement(
              material_1.ListItemIcon,
              { sx: sx.listItemIcon },
              react_1.default.createElement(
                material_1.IconButton,
                { onClick: handleToggleClick },
                react_1.default.createElement(icons_material_1.ChevronRight, {
                  sx: __assign(__assign({}, sx.icon), open && sx.expandMore),
                })
              )
            ),
          title &&
            react_1.default.createElement(material_1.ListItemText, {
              primary: react_1.default.createElement(
                material_1.Typography,
                { sx: sx.title, variant: variant },
                title
              ),
            })
        )
      ),
    react_1.default.createElement(
      material_1.Collapse,
      { in: open, timeout: "auto", unmountOnExit: true },
      react_1.default.createElement(
        material_1.Box,
        { sx: sx.content },
        children
      )
    )
  );
};
exports.default = List;
var sx = {
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

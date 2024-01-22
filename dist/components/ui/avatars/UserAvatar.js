"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var UserAvatar = function (props) {
  var _a;
  var user = props.user,
    label = props.label,
    handleClick = props.handleClick;
  return react_1.default.createElement(
    material_1.List,
    null,
    react_1.default.createElement(
      material_1.ListItem,
      { disableGutters: true },
      react_1.default.createElement(
        material_1.ListItemButton,
        { onClick: handleClick && handleClick },
        react_1.default.createElement(
          material_1.ListItemIcon,
          null,
          react_1.default.createElement(material_1.Avatar, {
            src:
              (_a = user === null || user === void 0 ? void 0 : user.avatar) ===
                null || _a === void 0
                ? void 0
                : _a.url,
            alt: user === null || user === void 0 ? void 0 : user.name,
          })
        ),
        react_1.default.createElement(material_1.ListItemText, {
          primary: user === null || user === void 0 ? void 0 : user.name,
          secondary: label,
        })
      )
    )
  );
};
exports.default = UserAvatar;

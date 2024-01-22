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
var lucide_react_1 = require("lucide-react");
var UserAvatar = function (props) {
  var _a;
  var user = props.user,
    _b = props.size,
    size = _b === void 0 ? 32 : _b;
  return react_1.default.createElement(
    material_1.Avatar,
    {
      src:
        (_a = user === null || user === void 0 ? void 0 : user.avatar) ===
          null || _a === void 0
          ? void 0
          : _a.url,
      sx: __assign(__assign({}, sx.avatar), {
        height: "".concat(size, "px"),
        width: "".concat(size, "px"),
      }),
    },
    react_1.default.createElement(lucide_react_1.User, {
      size: size,
      color: "black",
    })
  );
};
exports.default = UserAvatar;
var sx = {
  avatar: {
    height: "32px",
    width: "32px",
    bgcolor: "background.paper",
  },
};

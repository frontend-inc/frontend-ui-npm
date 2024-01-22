"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var OneTimePasswordVerifyForm = function (props) {
  var _a = props.verified,
    verified = _a === void 0 ? false : _a,
    handleRedirect = props.handleRedirect,
    handleLogin = props.handleLogin;
  return react_1.default.createElement(
    material_1.Stack,
    { spacing: 1 },
    verified
      ? react_1.default.createElement(
          material_1.Button,
          {
            fullWidth: true,
            variant: "contained",
            color: "primary",
            onClick: handleRedirect,
          },
          "Success! You can now continue"
        )
      : react_1.default.createElement(
          material_1.Button,
          { fullWidth: true, color: "primary", onClick: handleLogin },
          "Back to Login"
        )
  );
};
exports.default = OneTimePasswordVerifyForm;

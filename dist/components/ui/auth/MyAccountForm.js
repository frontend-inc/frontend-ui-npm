"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var MyAccountForm = function (props) {
  var user = props.user,
    handleSubmit = props.handleSubmit,
    handleChange = props.handleChange,
    handleRedirect = props.handleRedirect,
    handleDeleteAvatar = props.handleDeleteAvatar;
  return react_1.default.createElement(
    material_1.Box,
    { sx: sx.root },
    react_1.default.createElement(components_1.ImageInput, {
      value: user.avatar,
      name: "avatar",
      handleChange: handleChange,
      handleRemove: handleDeleteAvatar,
    }),
    react_1.default.createElement(components_1.TextInput, {
      value: user.first_name,
      name: "first_name",
      placeholder: "First name",
      handleChange: handleChange,
    }),
    react_1.default.createElement(components_1.TextInput, {
      value: user.last_name,
      name: "last_name",
      placeholder: "Last name",
      handleChange: handleChange,
    }),
    react_1.default.createElement(components_1.SwitchInput, {
      value: user === null || user === void 0 ? void 0 : user.accepts_marketing,
      placeholder: "Accept email marketing",
      name: "accepts_marketing",
      handleChange: handleChange,
    }),
    react_1.default.createElement(
      material_1.Button,
      {
        color: "primary",
        variant: "contained",
        startIcon: react_1.default.createElement(lucide_react_1.Check, null),
        onClick: handleSubmit,
      },
      "Save"
    ),
    react_1.default.createElement(
      material_1.Button,
      { color: "primary", onClick: handleRedirect },
      "Go back"
    )
  );
};
exports.default = MyAccountForm;
var sx = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var NewPasswordForm = function (props) {
    var loading = props.loading, errors = props.errors, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "password", value: user === null || user === void 0 ? void 0 : user.password, handleChange: handleChange, type: "password", placeholder: "New password" }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "password_confirmation", value: user === null || user === void 0 ? void 0 : user.password_confirmation, handleChange: handleChange, type: "password", placeholder: "Confirm password" }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, endIcon: react_1.default.createElement(components_1.IconLoader, { loading: loading }) }, "Save and Continue"),
        handleLogin && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleLogin }, "Back to Login"))));
};
exports.default = NewPasswordForm;

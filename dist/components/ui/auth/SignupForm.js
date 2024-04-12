"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var SignupForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, user = _a.user, handleChange = _a.handleChange, _b = _a.disableUsername, disableUsername = _b === void 0 ? false : _b, handleSubmit = _a.handleSubmit, handleLogin = _a.handleLogin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        !disableUsername && (react_1.default.createElement(components_1.TextInput, { errors: errors, name: "username", value: user === null || user === void 0 ? void 0 : user.username, placeholder: "Username", handleChange: handleChange })),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "first_name", value: user === null || user === void 0 ? void 0 : user.first_name, placeholder: "First name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "last_name", value: user === null || user === void 0 ? void 0 : user.last_name, placeholder: "Last name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Email", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "password", value: user === null || user === void 0 ? void 0 : user.password, type: "password", placeholder: "Password", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleSubmit, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, "Register"),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleLogin }, "Already have an account? Sign in")));
};
exports.default = SignupForm;

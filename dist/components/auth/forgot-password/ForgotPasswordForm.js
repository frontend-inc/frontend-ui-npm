"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ForgotPasswordForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(__1.TextInput, { label: "Email", errors: errors, name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Enter your email", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: loading && react_1.default.createElement(__1.IconLoading, null) }, "Send Instructions"),
        handleLogin && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleLogin }, "Back to Login"))));
};
exports.default = ForgotPasswordForm;

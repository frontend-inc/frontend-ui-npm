"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var LoginForm = function (props) {
    var errors = props.errors, _a = props.loading, loading = _a === void 0 ? false : _a, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleForgotPassword = props.handleForgotPassword, handleSignup = props.handleSignup, handleOneTimePassword = props.handleOneTimePassword, _b = props.enableGoogle, enableGoogle = _b === void 0 ? false : _b, handleGoogleSuccess = props.handleGoogleSuccess;
    return (react_1.default.createElement(material_1.Stack, { sx: sx.root, spacing: 2, divider: react_1.default.createElement(material_1.Divider, null) },
        enableGoogle && (react_1.default.createElement(components_1.GoogleLoginButton, { handleSuccess: handleGoogleSuccess })),
        react_1.default.createElement(material_1.Stack, { spacing: 1 },
            react_1.default.createElement(components_1.TextInput, { errors: errors, name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Email", handleChange: handleChange }),
            react_1.default.createElement(components_1.TextInput, { errors: errors, name: "password", value: user === null || user === void 0 ? void 0 : user.password, type: "password", placeholder: "Password", handleChange: handleChange }),
            react_1.default.createElement(material_1.Button, { fullWidth: true, size: "large", color: "primary", onClick: handleSubmit, variant: "contained", endIcon: react_1.default.createElement(components_1.IconLoader, { loading: loading }) }, "Sign In"),
            handleSignup && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", variant: "outlined", onClick: handleSignup }, "No account? Sign up")),
            handleForgotPassword && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleForgotPassword }, "Forgot password?")),
            handleOneTimePassword && (react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleOneTimePassword }, "One-time password")))));
};
exports.default = LoginForm;
var sx = {
    root: {
        mt: 2,
    },
    button: {
        color: 'text.primary',
    },
};

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var LoginForm = function (props) {
    var errors = props.errors, _a = props.loading, loading = _a === void 0 ? false : _a, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleForgotPassword = props.handleForgotPassword, handleSignup = props.handleSignup, handleOneTimePassword = props.handleOneTimePassword, _b = props.enableGoogle, enableGoogle = _b === void 0 ? false : _b, handleGoogleSuccess = props.handleGoogleSuccess;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
        enableGoogle && (react_1.default.createElement(__1.GoogleLoginButton, { handleSuccess: handleGoogleSuccess })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
            react_1.default.createElement(__1.TextInput, { errors: errors, label: "Email", name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Email", handleChange: handleChange }),
            react_1.default.createElement(__1.TextInput, { errors: errors, label: "Password", name: "password", value: user === null || user === void 0 ? void 0 : user.password, type: "password", placeholder: "Password", handleChange: handleChange })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
            react_1.default.createElement(react_2.Button, { variant: "solid", fullWidth: true, onPress: handleSubmit, isLoading: loading }, "Sign In"),
            handleSignup && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleSignup }, "No account? Sign up")),
            handleForgotPassword && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleForgotPassword }, "Forgot password?")),
            handleOneTimePassword && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleOneTimePassword }, "One-time password")))));
};
exports.default = LoginForm;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var ForgotPasswordForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(__1.TextInput, { label: "Email", errors: errors, name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Enter your email", handleChange: handleChange }),
        react_1.default.createElement(react_2.Button, { variant: "solid", fullWidth: true, onPress: handleSubmit, isLoading: loading }, "Send Instructions"),
        handleLogin && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleLogin }, "Back to Login"))));
};
exports.default = ForgotPasswordForm;

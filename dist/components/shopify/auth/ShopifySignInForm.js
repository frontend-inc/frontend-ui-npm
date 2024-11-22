'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var SignInForm = function (props) {
    var errors = props.errors, _a = props.loading, loading = _a === void 0 ? false : _a, customer = props.customer, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleForgotPassword = props.handleForgotPassword, handleSignup = props.handleSignup;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement(__1.TextInput, { errors: errors, name: "email", value: customer === null || customer === void 0 ? void 0 : customer.email, placeholder: "Email", handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { errors: errors, name: "password", value: customer === null || customer === void 0 ? void 0 : customer.password, type: "password", placeholder: "Password", handleChange: handleChange }),
        react_1.default.createElement(components_1.Button, { className: "w-full", onClick: handleSubmit, disabled: loading },
            "Sign In",
            loading && react_1.default.createElement(__1.IconLoading, { className: "ml-2 h-4 w-4 animate-spin" })),
        handleSignup && (react_1.default.createElement(components_1.Button, { className: "w-full", variant: "ghost", onClick: handleSignup }, "No account? Sign up")),
        handleForgotPassword && (react_1.default.createElement(components_1.Button, { className: "w-full", variant: "ghost", onClick: handleForgotPassword }, "Forgot password?"))));
};
exports.default = SignInForm;

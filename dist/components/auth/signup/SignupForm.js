'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var SignupForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, user = _a.user, handleChange = _a.handleChange, enableGoogle = _a.enableGoogle, handleSubmit = _a.handleSubmit, handleLogin = _a.handleLogin, handleGoogleSuccess = _a.handleGoogleSuccess;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
        enableGoogle && (react_1.default.createElement(__1.GoogleLoginButton, { handleSuccess: handleGoogleSuccess })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-4 w-full" },
            react_1.default.createElement("div", { className: "flex flex-row space-x-3 w-full items-center" },
                react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "first_name", label: "First name", value: user === null || user === void 0 ? void 0 : user.first_name, placeholder: "First name", handleChange: handleChange }),
                react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "last_name", label: "Last name", value: user === null || user === void 0 ? void 0 : user.last_name, placeholder: "Last name", handleChange: handleChange })),
            react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "email", label: "Email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Email", handleChange: handleChange }),
            react_1.default.createElement(__1.TextInput, { errors: errors, direction: "column", name: "password", label: "Password", value: user === null || user === void 0 ? void 0 : user.password, type: "password", placeholder: "Password", handleChange: handleChange })),
        react_1.default.createElement("div", { className: "flex flex-col space-y-3 w-full" },
            react_1.default.createElement(components_1.Button, { size: "lg", fullWidth: true, onClick: handleSubmit, loading: loading }, "Register"),
            handleLogin && (react_1.default.createElement(components_1.Button, { fullWidth: true, color: "secondary", variant: "ghost", onClick: handleLogin }, "Already have an account? Sign in")))));
};
exports.default = SignupForm;

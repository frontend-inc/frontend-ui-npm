'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var ResetPasswordForm = function (props) {
    var loading = props.loading, errors = props.errors, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(components_2.TextInput, { errors: errors, name: "password", value: user === null || user === void 0 ? void 0 : user.password, handleChange: handleChange, type: "password", placeholder: "New password" }),
        react_1.default.createElement(components_2.TextInput, { errors: errors, name: "password_confirmation", value: user === null || user === void 0 ? void 0 : user.password_confirmation, handleChange: handleChange, type: "password", placeholder: "Confirm password" }),
        react_1.default.createElement(components_1.Button, { fullWidth: true, onClick: handleSubmit, loading: loading }, "Save and Continue"),
        handleLogin && (react_1.default.createElement(components_1.Button, { fullWidth: true, onClick: handleLogin }, "Back to login"))));
};
exports.default = ResetPasswordForm;

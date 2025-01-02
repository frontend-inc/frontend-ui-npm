'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var SendPinForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
        react_1.default.createElement(__1.TextInput, { errors: errors, label: "Email", name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Enter your email", handleChange: handleChange }),
        react_1.default.createElement(react_2.Button, { color: "primary", variant: "ghost", fullWidth: true, onPress: handleSubmit, isLoading: loading }, "Send Verification Pin"),
        handleLogin && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleLogin }, "Cancel"))));
};
exports.default = SendPinForm;

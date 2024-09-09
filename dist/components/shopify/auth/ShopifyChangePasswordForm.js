"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ShopifyForgotPasswordForm = function (props) {
    var errors = props.errors, customer = props.customer, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleLogin = props.handleLogin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(__1.TextInput, { errors: errors, name: "email", value: customer === null || customer === void 0 ? void 0 : customer.email, placeholder: "Enter your email", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit }, "Send Instructions"),
        handleLogin && (react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "outlined", color: "primary", onClick: handleLogin }, "Back to Login"))));
};
exports.default = ShopifyForgotPasswordForm;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var SignupForm = function (props) {
    var _a = props || {}, loading = _a.loading, errors = _a.errors, customer = _a.customer, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit, handleLogin = _a.handleLogin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "firstName", value: customer === null || customer === void 0 ? void 0 : customer.firstName, placeholder: "First name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "lastName", value: customer === null || customer === void 0 ? void 0 : customer.lastName, placeholder: "Last name", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "email", value: customer === null || customer === void 0 ? void 0 : customer.email, placeholder: "Email", handleChange: handleChange }),
        react_1.default.createElement(components_1.TextInput, { errors: errors, name: "password", value: customer === null || customer === void 0 ? void 0 : customer.password, type: "password", placeholder: "Password", handleChange: handleChange }),
        react_1.default.createElement(components_1.SwitchInput, { errors: errors, name: "acceptsMarketing", value: customer === null || customer === void 0 ? void 0 : customer.acceptsMarketing, placeholder: "Accept marketing communication", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleSubmit, variant: "contained", startIcon: react_1.default.createElement(components_1.IconLoader, { loading: loading }) }, "Register"),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", variant: "outlined", onClick: handleLogin }, "Already have an account? Sign in")));
};
exports.default = SignupForm;

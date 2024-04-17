"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var SendPinForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(__1.TextInput, { errors: errors, label: "Email", name: "email", value: user === null || user === void 0 ? void 0 : user.email, placeholder: "Enter your email", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(__1.IconLoading, { loading: loading }) }, "Send Verification Pin")));
};
exports.default = SendPinForm;

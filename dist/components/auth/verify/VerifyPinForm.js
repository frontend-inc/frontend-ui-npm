"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var SendPinForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleResendPin = props.handleResendPin;
    return (react_1.default.createElement(material_1.Stack, { spacing: 1 },
        react_1.default.createElement(__1.TextInput, { label: "Enter your PIN", errors: errors, name: "pin", value: user === null || user === void 0 ? void 0 : user.pin, placeholder: "Enter PIN for verification", handleChange: handleChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: loading && react_1.default.createElement(__1.IconLoading, null) }, "Verify Pin"),
        react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", onClick: handleResendPin }, "Resend Pin")));
};
exports.default = SendPinForm;

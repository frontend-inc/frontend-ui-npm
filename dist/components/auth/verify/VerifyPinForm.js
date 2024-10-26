'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var __1 = require("../..");
var SendPinForm = function (props) {
    var errors = props.errors, loading = props.loading, user = props.user, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleResendPin = props.handleResendPin;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
        react_1.default.createElement(__1.TextInput, { label: "Enter your PIN", errors: errors, name: "pin", value: user === null || user === void 0 ? void 0 : user.pin, placeholder: "Enter PIN for verification", handleChange: handleChange }),
        react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleSubmit, startIcon: loading && react_1.default.createElement(__1.IconLoading, null) }, "Verify Pin"),
        react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleResendPin }, "Resend Pin")));
};
exports.default = SendPinForm;

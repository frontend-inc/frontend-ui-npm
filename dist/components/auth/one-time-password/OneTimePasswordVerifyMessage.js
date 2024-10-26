'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("../../core");
var OneTimePasswordVerifyForm = function (props) {
    var _a = props.verified, verified = _a === void 0 ? false : _a, handleRedirect = props.handleRedirect, handleLogin = props.handleLogin;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3" }, verified ? (react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleRedirect }, "Success! You can now continue")) : (react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleLogin }, "Back to Login"))));
};
exports.default = OneTimePasswordVerifyForm;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var SignUpButton = function (props) {
    var showIcon = props.showIcon, _a = props.buttonText, buttonText = _a === void 0 ? 'Sign Up' : _a;
    return react_1.default.createElement(components_1.SignInButton, { showIcon: showIcon, buttonText: buttonText });
};
exports.default = SignUpButton;

'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@nextui-org/react");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var SignInButton = function (props) {
    var _a = (props || {}).buttonText, buttonText = _a === void 0 ? 'Sign In' : _a;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var handleLogin = function () {
        setAuthOpen(true);
    };
    if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
        return null;
    return (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "solid", color: "primary", onPress: handleLogin }, buttonText));
};
exports.default = SignInButton;

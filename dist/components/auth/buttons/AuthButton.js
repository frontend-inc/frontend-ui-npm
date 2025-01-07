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
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var AuthButton = function (props) {
    var _a = props || {}, _b = _a.showLabel, showLabel = _b === void 0 ? false : _b, _c = _a.showIcon, showIcon = _c === void 0 ? true : _c;
    var _d = (0, frontend_js_1.useAuth)(), fetchMe = _d.fetchMe, currentUser = _d.currentUser;
    var _e = (0, hooks_1.useApp)(), setAuthOpen = _e.setAuthOpen, setMyAccountOpen = _e.setMyAccountOpen;
    var handleLogin = function () {
        setAuthOpen(true);
    };
    var handleMyAccount = function () {
        setMyAccountOpen(true);
    };
    (0, react_1.useEffect)(function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
            fetchMe();
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return (react_1.default.createElement(react_1.default.Fragment, null, !showLabel ? (react_1.default.createElement(react_1.default.Fragment, null, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) ? (react_1.default.createElement(react_2.Button, { isIconOnly: true, className: "max-w-8", onPress: handleMyAccount },
        react_1.default.createElement(__1.UserAvatar, { user: currentUser }))) : (react_1.default.createElement(react_2.Button, { isIconOnly: true, className: "max-w-8", onPress: handleLogin },
        react_1.default.createElement(__1.RemixIcon, { name: "ri-user-6-line", size: "lg" }))))) : (react_1.default.createElement(react_1.default.Fragment, null, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) ? (react_1.default.createElement(react_2.Button, { onPress: handleMyAccount, startContent: showIcon && react_1.default.createElement(__1.UserAvatar, { user: currentUser }), endContent: react_1.default.createElement(__1.RemixIcon, { name: "ri-arrow-down-s-line" }) },
        react_1.default.createElement(components_1.Typography, { variant: "body1" }, currentUser === null || currentUser === void 0 ? void 0 : currentUser.username))) : (react_1.default.createElement(react_2.Button, { onPress: handleLogin, startContent: showIcon && react_1.default.createElement(__1.RemixIcon, { name: "ri-user-6-fill" }) }, "Sign In"))))));
};
exports.default = AuthButton;

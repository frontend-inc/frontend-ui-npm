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
var material_1 = require("@mui/material");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var SignInButton = function (props) {
    var _a = props || {}, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Sign In' : _c;
    var _d = (0, frontend_js_1.useAuth)(), fetchMe = _d.fetchMe, currentUser = _d.currentUser;
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var handleLogin = function () {
        setAuthOpen(true);
    };
    if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
        return null;
    return (react_1.default.createElement(material_1.Button, { sx: sx.button, variant: "contained", color: color, onClick: handleLogin }, buttonText));
};
exports.default = SignInButton;
var sx = {
    button: {
        width: '100%',
        justifyContent: 'flex-start',
    },
};

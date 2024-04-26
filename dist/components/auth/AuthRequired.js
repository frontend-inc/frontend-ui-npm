"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../components");
var AuthRequired = function (props) {
    var children = props.children;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)
        return children;
    return (react_1.default.createElement(components_1.Placeholder, { title: "Sign In", description: "Please sign in to view this content.", actions: react_1.default.createElement(components_1.SignInButton, { buttonText: "Login" }) }));
};
exports.default = AuthRequired;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_js_1 = require("frontend-js");
var __1 = require("..");
var AuthGuard = function (props) {
    var children = props.children, _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if (requireAuth && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        return react_1.default.createElement(__1.AuthWall, null);
    }
    return children;
};
exports.default = AuthGuard;

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
    var children = props.children, _a = props.roles, roles = _a === void 0 ? [] : _a, _b = props.requireAuth, requireAuth = _b === void 0 ? false : _b, _c = props.requireTeam, requireTeam = _c === void 0 ? false : _c, _d = props.requirePaid, requirePaid = _d === void 0 ? false : _d;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    if (requireAuth && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        return react_1.default.createElement(__1.AuthWall, null);
    }
    if ((roles === null || roles === void 0 ? void 0 : roles.length) > 0 &&
        !(roles === null || roles === void 0 ? void 0 : roles.includes(currentUser === null || currentUser === void 0 ? void 0 : currentUser.role)) &&
        (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) !== 'admin') {
        return (react_1.default.createElement("div", { className: "flex w-full justify-center items-center" },
            react_1.default.createElement(__1.Heading, { textAlign: "center", title: "Unauthorized", description: "You are not authorized to access this page." })));
    }
    if (requirePaid && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.paid)) {
        return react_1.default.createElement(__1.PayWall, null);
    }
    return children;
};
exports.default = AuthGuard;

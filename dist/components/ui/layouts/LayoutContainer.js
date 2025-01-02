'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var react_2 = require("@nextui-org/react");
function LayoutContainer(props) {
    var children = props.children, notifications = props.notifications, requireAuth = props.requireAuth;
    return (react_1.default.createElement("div", { className: "w-full min-h-screen" },
        react_1.default.createElement("div", { className: (0, react_2.cn)('w-full h-full overflow-y-scroll scrollbar-hide', 'bg-background') },
            react_1.default.createElement("div", { className: "flex flex-col w-full" },
                react_1.default.createElement(components_1.AuthGuard, { requireAuth: requireAuth },
                    react_1.default.createElement(components_2.Notifications, { notifications: notifications }),
                    children)))));
}
exports.default = LayoutContainer;

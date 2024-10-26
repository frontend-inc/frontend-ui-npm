'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
function UserChip(_a) {
    var user = _a.user, enableEmail = _a.enableEmail, enableUsername = _a.enableUsername, _b = _a.size, size = _b === void 0 ? 24 : _b;
    if (!(user === null || user === void 0 ? void 0 : user.name))
        return null;
    return (react_1.default.createElement("div", { className: "flex items-center py-0.5 space-x-2" },
        react_1.default.createElement(__1.UserAvatar, { user: user, size: size }),
        react_1.default.createElement("div", { className: "flex flex-col py-0.5" },
            react_1.default.createElement("span", { className: "text-xs text-muted-foreground" }, user.name),
            enableEmail && (user === null || user === void 0 ? void 0 : user.email) && (react_1.default.createElement("span", { className: "text-xs text-muted-foreground" }, user.email)),
            enableUsername && (react_1.default.createElement("span", { className: "text-xs text-muted-foreground" },
                "@",
                user.username)))));
}
exports.default = UserChip;

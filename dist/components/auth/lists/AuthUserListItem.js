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
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var components_1 = require("../../../components");
var AuthUserListItem = function (_a) {
    var user = _a.user, _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.isAdmin, isAdmin = _c === void 0 ? false : _c, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    var _d = (0, react_1.useState)(false), canEdit = _d[0], setCanEdit = _d[1];
    var _e = (0, react_1.useState)(false), canDelete = _e[0], setCanDelete = _e[1];
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    (0, react_1.useEffect)(function () {
        if (isAdmin && (user === null || user === void 0 ? void 0 : user.role) !== 'admin') {
            setCanEdit(true);
        }
        if (isAdmin && ((user === null || user === void 0 ? void 0 : user.role) !== 'admin' || (user === null || user === void 0 ? void 0 : user.id) == (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))) {
            setCanDelete(true);
        }
    }, [user, isAdmin, currentUser]);
    return (react_1.default.createElement("li", { className: "p-0 rounded-md ".concat(selected ? 'border-3 border-primary' : '') },
        react_1.default.createElement(components_1.Button, { variant: "ghost", className: "w-full justify-start px-2 py-3", onClick: handleClick },
            react_1.default.createElement("div", { className: "flex items-center w-full" },
                react_1.default.createElement("div", { className: "mr-4" },
                    react_1.default.createElement(__1.UserAvatar, { user: user })),
                react_1.default.createElement("div", { className: "flex-grow" },
                    react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                        react_1.default.createElement("span", { className: "text-sm font-medium" }, user.name),
                        (user === null || user === void 0 ? void 0 : user.role) && react_1.default.createElement(__1.Label, { label: user === null || user === void 0 ? void 0 : user.role })),
                    react_1.default.createElement("span", { className: "text-xs text-muted-foreground" }, user.email)),
                (canEdit || canDelete) && (react_1.default.createElement(__1.MenuButton, { handleEdit: canEdit ? function () { return handleEdit(user); } : undefined, handleDelete: canDelete ? function () { return handleDelete(user); } : undefined }))))));
};
exports.default = AuthUserListItem;

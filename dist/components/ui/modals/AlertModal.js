'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var components_1 = require("../../../components");
var frontend_shadcn_2 = require("frontend-shadcn");
var AlertModal = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.title, title = _c === void 0 ? 'Please confirm or cancel this action.' : _c, _d = _a.description, description = _d === void 0 ? 'This action is not reversable.' : _d, open = _a.open, handleClose = _a.handleClose, handleConfirm = _a.handleConfirm;
    return (react_1.default.createElement(frontend_shadcn_1.AlertDialog, { open: open, onOpenChange: handleClose },
        react_1.default.createElement(frontend_shadcn_1.AlertDialogContent, null,
            react_1.default.createElement(frontend_shadcn_1.AlertDialogHeader, null,
                react_1.default.createElement(frontend_shadcn_1.AlertDialogTitle, null, title),
                react_1.default.createElement(frontend_shadcn_1.AlertDialogDescription, null, description)),
            loading && (react_1.default.createElement("div", { className: "flex flex-col items-center justify-center" },
                react_1.default.createElement(components_1.CircularLoader, { size: 'lg' }))),
            react_1.default.createElement(frontend_shadcn_1.AlertDialogFooter, null,
                react_1.default.createElement(frontend_shadcn_1.AlertDialogCancel, { asChild: true },
                    react_1.default.createElement(components_1.Button, { variant: "secondary", onClick: handleClose }, "Cancel")),
                react_1.default.createElement(frontend_shadcn_1.AlertDialogAction, { asChild: true },
                    react_1.default.createElement(components_1.Button, { variant: "default", onClick: handleConfirm, className: (0, frontend_shadcn_2.cn)(loading && 'cursor-not-allowed opacity-50'), disabled: loading, loading: loading }, "Confirm"))))));
};
exports.default = AlertModal;

'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../../hooks");
function Modal(props) {
    var open = props.open, _a = props.loading, loading = _a === void 0 ? false : _a, handleClose = props.handleClose, title = props.title, buttons = props.buttons, children = props.children, _b = props.maxWidth, maxWidth = _b === void 0 ? 'md' : _b;
    var themeClass = (0, hooks_1.useTheme)().themeClass;
    return (react_1.default.createElement(react_2.Modal, { size: maxWidth, isOpen: open, onOpenChange: handleClose, className: themeClass },
        react_1.default.createElement(react_2.ModalContent, null, function (onClose) { return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.ModalHeader, { className: "mt-4 text-foreground" }, title),
            react_1.default.createElement(react_2.ModalBody, { className: "px-4 w-full overflow-y-scroll" }, loading ? (react_1.default.createElement("div", { className: "w-full flex items-center justify-center h-[160px]" },
                react_1.default.createElement(react_2.Spinner, null))) : (children)),
            !loading && buttons && react_1.default.createElement(react_2.ModalFooter, null, buttons))); })));
}
exports.default = Modal;

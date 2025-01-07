'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var AlertModal = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.title, title = _b === void 0 ? 'Please confirm or cancel this action.' : _b, _c = props.description, description = _c === void 0 ? 'This action is not reversable.' : _c, open = props.open, handleClose = props.handleClose, handleConfirm = props.handleConfirm;
    return (react_1.default.createElement(react_2.Modal, { isOpen: open, onOpenChange: handleClose },
        react_1.default.createElement(react_2.ModalContent, null, function (onClose) { return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.ModalHeader, null),
            react_1.default.createElement(react_2.ModalBody, { className: "flex flex-col items-center justify-center py-6" }, loading ? (react_1.default.createElement(react_2.Spinner, null)) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, title),
                react_1.default.createElement(components_1.Typography, { variant: "body1", className: "text-foreground/70" }, description)))),
            react_1.default.createElement(react_2.ModalFooter, null,
                react_1.default.createElement(react_2.Button, { variant: "ghost", onPress: onClose }, "Cancel"),
                react_1.default.createElement(react_2.Button, { color: "danger", variant: "solid", onPress: handleConfirm, disabled: loading, isLoading: loading }, "Confirm")))); })));
};
exports.default = AlertModal;

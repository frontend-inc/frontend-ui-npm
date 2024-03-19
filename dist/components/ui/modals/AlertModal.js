"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var AlertModal = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.title, title = _b === void 0 ? 'Please confirm or cancel this action.' : _b, _c = props.description, description = _c === void 0 ? 'This action is not reversable.' : _c, open = props.open, handleClose = props.handleClose, handleConfirm = props.handleConfirm;
    return (react_1.default.createElement(components_1.Modal, { open: open, loading: loading, title: "Are you sure?", actions: react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleConfirm, startIcon: react_1.default.createElement(components_1.ButtonLoader, { loading: loading }) }, "Confirm"), handleClose: handleClose }, !loading && (react_1.default.createElement(components_1.Placeholder, { icon: 'CircleAlert', title: title, description: description }))));
};
exports.default = AlertModal;

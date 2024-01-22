"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var AlertModal = function (props) {
    var _a;
    var _b = props.loading, loading = _b === void 0 ? false : _b, _c = props.title, title = _c === void 0 ? "Please confirm or cancel this action." : _c, _d = props.description, description = _d === void 0 ? "This action is not reversable." : _d, open = props.open, handleClose = props.handleClose, handleConfirm = props.handleConfirm;
    var theme = (0, material_1.useTheme)();
    return (react_1.default.createElement(components_1.Modal, { open: open, loading: loading, title: "Are you sure?", actions: react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary", onClick: handleConfirm, startIcon: react_1.default.createElement(components_1.ButtonLoader, { loading: loading }) }, "Confirm"), handleClose: handleClose }, !loading && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(lucide_react_1.AlertCircle, { color: (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.text.primary }), title: title, description: description }))));
};
exports.default = AlertModal;
var sx = {
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: "icon",
        height: 32,
        width: 32,
    },
};

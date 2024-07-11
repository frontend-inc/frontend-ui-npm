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
var components_1 = require("../../../components");
var lucide_react_1 = require("lucide-react");
var material_1 = require("@mui/material");
var EditableTextInput = function (props) {
    var value = props.value, name = props.name, label = props.label, handleChange = props.handleChange, handleSubmit = props.handleSubmit, loading = props.loading, placeholder = props.placeholder, info = props.info;
    var _a = (0, react_1.useState)(false), editing = _a[0], setEditing = _a[1];
    var handleSubmitInput = function (name, value) {
        setEditing(false);
        handleSubmit(name, value);
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.TextInput, { disabled: !editing, value: value, label: label, name: name, handleChange: handleChange, placeholder: placeholder, info: info }),
        react_1.default.createElement(material_1.Box, { sx: sx.icons }, loading ? (react_1.default.createElement(material_1.CircularProgress, { disableShrink: true, size: 24, sx: sx.icon })) : (react_1.default.createElement(react_1.default.Fragment, null,
            editing ? (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return setEditing(false); }, sx: sx.iconButton },
                react_1.default.createElement(lucide_react_1.XCircle, null))) : (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return setEditing(true); }, sx: sx.iconButton },
                react_1.default.createElement(lucide_react_1.Edit, null))),
            editing && (react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleSubmitInput(name, value); }, sx: sx.iconButton },
                react_1.default.createElement(lucide_react_1.CheckCircle, null))))))));
};
exports.default = EditableTextInput;
var sx = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    icons: {
        mt: 2,
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    icon: {
        height: 20,
        width: 20,
        color: 'secondary.main',
    },
    iconButton: {},
};

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
var material_1 = require("@mui/material");
var components_1 = require("../../../../components");
var AiButton = function (props) {
    var _a = props || {}, loading = _a.loading, _b = _a.icon, icon = _b === void 0 ? 'Wand' : _b, _c = _a.title, title = _c === void 0 ? 'Do you want to use AI?' : _c, _d = _a.description, description = _d === void 0 ? 'This action may take a while to complete.' : _d, handleClick = _a.handleClick;
    var _e = (0, react_1.useState)(false), open = _e[0], setOpen = _e[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { sx: sx.iconButton, onClick: function () { return setOpen(true); } },
            react_1.default.createElement(components_1.Icon, { name: "Wand" })),
        react_1.default.createElement(components_1.AlertModal, { loading: loading, open: open, handleClose: function () { return setOpen(false); }, icon: "Wand", title: title, description: description, handleConfirm: handleClick })));
};
exports.default = AiButton;
var sx = {
    iconButton: {
        minWidth: 44,
        borderRadius: 1,
        bgcolor: 'secondary.main',
        '&:hover': {
            bgcolor: 'secondary.dark'
        },
    }
};

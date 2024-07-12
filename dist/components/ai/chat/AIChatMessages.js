"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AIChatMessages = function (props) {
    var _a;
    var avatar = props.avatar, messages = props.messages;
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, (_a = messages === null || messages === void 0 ? void 0 : messages.filter(function (message) { return message.role != 'system'; })) === null || _a === void 0 ? void 0 : _a.map(function (message, i) { return (react_1.default.createElement(material_1.ListItem, { key: i, disablePadding: true, sx: sx.listItem },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon }, avatar && message.role == 'assistant' && react_1.default.createElement(material_1.Avatar, { src: avatar })),
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton },
            react_1.default.createElement(material_1.ListItemText, { sx: sx.text, primary: message.content })))); })));
};
exports.default = AIChatMessages;
var sx = {
    listItem: {
        mb: 1,
    },
    listItemIcon: {
        mr: 2,
        width: 4,
    },
    listItemButton: {
        p: 1,
        borderRadius: 1,
    },
    text: {
        color: 'text.primary',
        '& .MuiListItemText-primary': {
            whiteSpace: 'pre-line',
        },
    },
};

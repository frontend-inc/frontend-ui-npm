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
var AiChatForm = function (props) {
    var open = props.open, prompt = props.prompt, handleClick = props.handleClick, messages = props.messages, setMessages = props.setMessages, input = props.input, handleInputChange = props.handleInputChange;
    (0, react_1.useEffect)(function () {
        if (open) {
            setMessages([
                {
                    id: 'openai-chat',
                    role: 'system',
                    content: prompt,
                },
            ]);
        }
    }, [open]);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1 },
        react_1.default.createElement(components_1.TextInput, { multiline: true, label: "Write a sentence about ...", name: "prompt", placeholder: "Enter text...", value: input, handleChange: handleInputChange }),
        react_1.default.createElement(material_1.List, { disablePadding: true }, messages
            .filter(function (message) { return message.role == 'assistant'; })
            .map(function (message, i) { return (react_1.default.createElement(material_1.ListItem, { key: i, disablePadding: true, sx: sx.listItem },
            react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onClick: function () { return handleClick(message.content); } },
                react_1.default.createElement(material_1.ListItemText, { sx: sx.text, primary: message.content })))); }))));
};
exports.default = AiChatForm;
var sx = {
    listItem: {
        mb: 1,
    },
    listItemButton: {
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        p: 1,
        borderRadius: 1,
        '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'background.paper',
        },
    },
    text: {
        '& .MuiListItemText-primary': {
            whiteSpace: 'pre-line',
        },
    },
};

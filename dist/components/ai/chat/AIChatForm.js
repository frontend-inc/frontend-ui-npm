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
var components_1 = require("../../../components");
var AiChatForm = function (props) {
    var _a = props.label, label = _a === void 0 ? 'Start a conversation' : _a, prompt = props.prompt, setMessages = props.setMessages, input = props.input, handleInputChange = props.handleInputChange;
    (0, react_1.useEffect)(function () {
        setMessages([
            {
                id: 'openai-chat',
                role: 'system',
                content: prompt,
            },
        ]);
    }, [prompt]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(components_1.TextInput, { multiline: true, label: label, name: "prompt", placeholder: "Enter text...", value: input, handleChange: handleInputChange })));
};
exports.default = AiChatForm;
var sx = {
    root: {
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        p: 2,
        bgcolor: 'secondary.light',
    },
};

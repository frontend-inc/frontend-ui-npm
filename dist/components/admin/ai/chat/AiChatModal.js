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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../../components");
var material_1 = require("@mui/material");
var AiChatForm_1 = __importDefault(require("./AiChatForm"));
var react_2 = require("ai/react");
var AiChatModal = function (props) {
    var _a = props.id, id = _a === void 0 ? 'openai-chat' : _a, label = props.label, name = props.name, handleChange = props.handleChange, _b = props.prompt, prompt = _b === void 0 ? '' : _b;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(false), loading = _d[0], setLoading = _d[1];
    var _e = (0, react_2.useChat)({
        id: id,
        onFinish: function (resp) { return setLoading(false); },
    }), messages = _e.messages, setMessages = _e.setMessages, handleSubmit = _e.handleSubmit, input = _e.input, handleInputChange = _e.handleInputChange;
    var handleClick = function (text) {
        setOpen(false);
        handleChange({
            target: {
                name: name,
                value: text,
            },
        });
    };
    var handleChatSubmit = function (ev) {
        setLoading(true);
        handleSubmit(ev);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Tooltip, { title: "Use AI to generate text" },
            react_1.default.createElement(material_1.IconButton, { size: "small", sx: sx.iconButton, onClick: function () { return setOpen(!open); } },
                react_1.default.createElement(components_1.Icon, { name: "Sparkles", color: "text.primary" }))),
        react_1.default.createElement(components_1.Drawer, { title: label, open: open, handleClose: function () { return setOpen(false); }, buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleChatSubmit, startIcon: loading ? (react_1.default.createElement(components_1.IconLoading, { loading: loading })) : (react_1.default.createElement(components_1.Icon, { name: "Sparkles", color: "primary.contrastText" })) }, !loading && "Generate") },
            react_1.default.createElement(AiChatForm_1.default, { open: open, prompt: prompt, handleClick: handleClick, messages: messages, setMessages: setMessages, input: input, handleInputChange: handleInputChange }))));
};
exports.default = AiChatModal;
var sx = {
    iconButton: {
        width: 40,
        height: 40,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
};

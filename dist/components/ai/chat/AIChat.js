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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var AIChatForm_1 = __importDefault(require("./AIChatForm"));
var AIChatMessages_1 = __importDefault(require("./AIChatMessages"));
var react_2 = require("ai/react");
var AIChat = function (props) {
    var avatar = props.avatar, _a = props.id, id = _a === void 0 ? 'openai-chat' : _a, _b = props.label, label = _b === void 0 ? "Start a conversation" : _b, _c = props.prompt, prompt = _c === void 0 ? '' : _c, _d = props.buttonText, buttonText = _d === void 0 ? "Send Message" : _d;
    var _e = (0, react_1.useState)(false), loading = _e[0], setLoading = _e[1];
    var _f = (0, react_2.useChat)({
        id: id,
        onFinish: function (resp) { return setLoading(false); },
    }), messages = _f.messages, setMessages = _f.setMessages, handleSubmit = _f.handleSubmit, input = _f.input, handleInputChange = _f.handleInputChange;
    var handleChatSubmit = function (ev) {
        setLoading(true);
        handleSubmit(ev);
    };
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
        react_1.default.createElement(AIChatMessages_1.default, { avatar: avatar, messages: messages }),
        react_1.default.createElement(AIChatForm_1.default, { label: label, prompt: prompt, setMessages: setMessages, input: input, handleInputChange: handleInputChange }),
        react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleChatSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, !loading && buttonText)));
};
exports.default = AIChat;

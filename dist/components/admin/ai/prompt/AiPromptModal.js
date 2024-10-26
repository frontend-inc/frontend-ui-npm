'use client';
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
var core_1 = require("../../../core");
var AiPromptForm_1 = __importDefault(require("./AiPromptForm"));
var lucide_react_1 = require("lucide-react");
var AiPromptModal = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.label, label = _b === void 0 ? '' : _b, handleSubmit = props.handleSubmit;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(''), prompt = _d[0], setPrompt = _d[1];
    var handleChange = function (ev) {
        setPrompt(ev.target.value);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Tooltip, { title: "Use AI to generate text" },
            react_1.default.createElement(core_1.IconButton, { onClick: function () { return setOpen(!open); } },
                react_1.default.createElement(lucide_react_1.Sparkles, { className: "w-5 h-5 text-foreground" }))),
        react_1.default.createElement(components_1.Sheet, { title: label, open: open, handleClose: function () { return setOpen(false); }, buttons: react_1.default.createElement(core_1.Button, { fullWidth: true, onClick: handleSubmit, loading: loading, startIcon: !loading && react_1.default.createElement(components_1.Icon, { name: "Sparkles" }) }, "Generate") },
            react_1.default.createElement(AiPromptForm_1.default, { open: open, value: prompt, handleChange: handleChange }))));
};
exports.default = AiPromptModal;

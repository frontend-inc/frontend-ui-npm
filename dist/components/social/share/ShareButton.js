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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
function ShareButton(props) {
    var url = props.url, _a = props.variant, variant = _a === void 0 ? 'rounded' : _a, _b = props.size, size = _b === void 0 ? 'small' : _b;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var handleClick = function () {
        setOpen(true);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(components_1.IconButton, { onPress: handleClick, className: (0, react_2.cn)(variant == 'circular' ? 'rounded-full' : 'rounded-lg', 'text-foreground', size === 'large' && 'border border-divider') },
            react_1.default.createElement(components_1.RemixIcon, { name: "ri-share-2-fill" })),
        react_1.default.createElement(components_1.ShareModal, { open: open, handleClose: function () { return setOpen(false); }, url: url })));
}
exports.default = ShareButton;

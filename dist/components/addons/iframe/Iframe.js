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
var frontend_shadcn_1 = require("frontend-shadcn");
var react_responsive_1 = require("react-responsive");
var Iframe = function (props) {
    var src = props.src, _a = props.height, height = _a === void 0 ? 400 : _a, _b = props.mobileHeight, mobileHeight = _b === void 0 ? 400 : _b, className = props.className;
    var isMobile = (0, react_responsive_1.useMediaQuery)({ maxWidth: 639 });
    var _c = (0, react_1.useState)(height), iframeHeight = _c[0], setIframeHeight = _c[1];
    (0, react_1.useEffect)(function () {
        if (isMobile) {
            setIframeHeight(mobileHeight);
        }
        else {
            setIframeHeight(height);
        }
    }, [isMobile]);
    if (!iframeHeight)
        return null;
    return (react_1.default.createElement("iframe", { src: src, style: {
            height: "".concat(iframeHeight, "px"),
            width: '100%',
            border: 'none',
            overflow: 'hidden',
        }, className: (0, frontend_shadcn_1.cn)('w-full border-0 overflow-hidden', className) }));
};
exports.default = Iframe;

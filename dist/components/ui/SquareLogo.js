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
var navigation_1 = require("next/navigation");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var context_1 = require("../../context");
var SquareLogo = function (props) {
    var src = props.src, _a = props.size, size = _a === void 0 ? 64 : _a;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var router = (0, navigation_1.useRouter)();
    var handleClick = function () {
        router.push(clientUrl);
    };
    return (react_1.default.createElement(material_1.Button, { onClick: handleClick },
        react_1.default.createElement(image_1.default, { src: src, alt: "Logo", width: size, height: size, style: {
                objectFit: 'contain',
            } })));
};
exports.default = SquareLogo;

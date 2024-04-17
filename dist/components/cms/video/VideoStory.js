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
var __1 = require("../..");
var VideoVert = function (props) {
    var _a = props || {}, label = _a.label, title = _a.title, _b = _a.image, image = _b === void 0 ? '' : _b, _c = _a.video, video = _c === void 0 ? '' : _c, buttonText = _a.buttonText, _d = _a.textVariant, textVariant = _d === void 0 ? 'subtitle1' : _d, _e = _a.objectFit, objectFit = _e === void 0 ? 'cover' : _e, _f = _a.height, height = _f === void 0 ? 80 : _f, _g = _a.width, width = _g === void 0 ? 80 : _g, _h = _a.enableBorder, enableBorder = _h === void 0 ? false : _h, _j = _a.enableGradient, enableGradient = _j === void 0 ? false : _j, _k = _a.enableOverlay, enableOverlay = _k === void 0 ? false : _k;
    var _l = (0, react_1.useState)(false), open = _l[0], setOpen = _l[1];
    var handleItemClick = function () {
        setOpen(true);
    };
    return !open ? (react_1.default.createElement(__1.AvatarCard, { direction: "row", label: label, image: image, handleClick: handleItemClick, buttonText: buttonText, textVariant: textVariant, objectFit: objectFit, height: height, width: width, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })) : (react_1.default.createElement(__1.VideoModal, { open: open, title: title, src: video, handleClose: function () { return setOpen(false); } }));
};
exports.default = VideoVert;

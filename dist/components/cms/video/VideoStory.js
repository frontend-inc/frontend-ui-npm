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
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e;
    var _f = resource || {}, video = _f.video, title = _f.title;
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var handleItemClick = function () {
        setOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.AvatarCard, { actions: actions, resource: resource, handleClick: handleItemClick, height: height, width: width, displayFields: [], enableGradient: enableGradient, enableOverlay: enableOverlay }),
        react_1.default.createElement(__1.VideoModal, { open: open, title: title, src: video, handleClose: function () { return setOpen(false); } })));
};
exports.default = VideoVert;

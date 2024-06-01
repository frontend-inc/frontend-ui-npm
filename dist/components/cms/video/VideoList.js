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
var index_1 = require("../../../constants/index");
var VideoVert = function (props) {
    var _a = props || {}, actions = _a.actions, resource = _a.resource, href = _a.href, handleClick = _a.handleClick, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = _a.height, height = _c === void 0 ? index_1.VIDEO_VERT_HEIGHT : _c, _d = _a.width, width = _d === void 0 ? index_1.VIDEO_VERT_WIDTH : _d, _e = _a.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = _a.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = _a.enableOverlay, enableOverlay = _g === void 0 ? false : _g;
    var _h = (0, react_1.useState)(false), open = _h[0], setOpen = _h[1];
    var handleItemClick = function () {
        setOpen(true);
    };
    return !open ? (react_1.default.createElement(__1.CoverCard, { actions: actions, variant: "grid", resource: resource, handleClick: handleItemClick, objectFit: objectFit, height: height, width: width, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay, icon: "PlayCircle" })) : (react_1.default.createElement(__1.VideoModal, { open: open, title: resource === null || resource === void 0 ? void 0 : resource.title, src: resource === null || resource === void 0 ? void 0 : resource.video, handleClose: function () { return setOpen(false); } }));
};
exports.default = VideoVert;

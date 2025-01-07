'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var react_2 = require("@nextui-org/react");
var ButtonAction = function (props) {
    var icon = props.icon, action = props.action, url = props.url, path = props.path, src = props.src, _a = props.color, color = _a === void 0 ? 'default' : _a, _b = props.variant, variant = _b === void 0 ? 'solid' : _b, _c = props.size, size = _c === void 0 ? 'md' : _c, children = props.children, rest = __rest(props, ["icon", "action", "url", "path", "src", "color", "variant", "size", "children"]);
    var _d = (0, hooks_1.useButton)({
        action: action,
        url: url,
        path: path,
        src: src,
    }), openShare = _d.openShare, setOpenShare = _d.setOpenShare, openVideo = _d.openVideo, setOpenVideo = _d.setOpenVideo, openImage = _d.openImage, setOpenImage = _d.setOpenImage, handleClick = _d.handleClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Button, __assign({ fullWidth: true }, rest, { size: size, variant: variant, color: color, startContent: icon && (react_1.default.createElement(__1.RemixIcon, { name: icon })), 
            /* @ts-ignore */
            onPress: handleClick }), children),
        src && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(__1.VideoModal, { open: openVideo, handleClose: function () { return setOpenVideo(false); }, src: src }),
            react_1.default.createElement(__1.ImageModal, { open: openImage, handleClose: function () { return setOpenImage(false); }, src: src }),
            react_1.default.createElement(__1.ShareModal, { open: openShare, handleClose: function () { return setOpenShare(false); }, 
                //@ts-ignore
                url: url })))));
};
exports.default = ButtonAction;

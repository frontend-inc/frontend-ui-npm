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
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var Notification = function (props) {
    var router = (0, router_1.useRouter)();
    var notification = (props || {}).notification;
    var _a = notification || {}, text = _a.text, path = _a.path, url = _a.url, notification_type = _a.notification_type;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleClick = function () {
        switch (notification_type) {
            case 'url':
                window.open(url, '_blank');
                break;
            case 'page':
            case 'document':
                router.push("".concat(clientUrl).concat(path));
                break;
        }
    };
    var _b = (0, hooks_1.useClickOrDrag)({
        onClick: handleClick,
    }), onMouseDown = _b.onMouseDown, onMouseUp = _b.onMouseUp;
    return (react_1.default.createElement(material_1.ListItem, { sx: sx.root },
        react_1.default.createElement(material_1.ListItemButton, { sx: sx.listItemButton, onMouseDown: onMouseDown, onMouseUp: onMouseUp },
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { color: "primary.contrastText", variant: "body2", sx: sx.text }, text) }))));
};
exports.default = Notification;
var sx = {
    root: {
        p: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.main',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    text: {
        textWrap: 'nowrap',
        textAlign: 'center',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    listItemButton: {},
};

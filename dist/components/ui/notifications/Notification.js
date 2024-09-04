"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var hooks_2 = require("../../../hooks");
var router_1 = require("next/router");
var Notification = function (props) {
    var router = (0, router_1.useRouter)();
    var notification = (props || {}).notification;
    var _a = notification || {}, text = _a.text, path = _a.path, url = _a.url, notification_type = _a.notification_type;
    var clientUrl = (0, hooks_2.useApp)().clientUrl;
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

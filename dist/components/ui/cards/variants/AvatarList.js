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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var helpers_1 = require("../../../../helpers");
var components_1 = require("../../../../components");
var AvatarList = function (props) {
    var actions = props.actions, resource = props.resource, _a = props.height, height = _a === void 0 ? 128 : _a, _b = props.width, width = _b === void 0 ? 128 : _b, handleClick = props.handleClick, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = props.enableFavorites, enableFavorites = _f === void 0 ? false : _f;
    var _g = resource || {}, title = _g.title, description = _g.description, image = _g.image;
    return (react_1.default.createElement(material_1.List, { disablePadding: true, sx: __assign(__assign({}, sx.listItem), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.ListItem, { disablePadding: true, disableGutters: true, secondaryAction: react_1.default.createElement(material_1.Stack, { direction: "row", alignItems: "flex-end", mr: 1 },
                enableFavorites && (react_1.default.createElement(components_1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
                react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: resource })) },
            react_1.default.createElement(material_1.ListItemButton, { sx: {
                    minHeight: height + 44,
                }, onClick: handleClick && handleClick },
                react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                    react_1.default.createElement(material_1.Avatar, { sx: __assign(__assign(__assign(__assign({}, sx.avatar), (enableGradient && sx.gradient)), (enableOverlay && sx.overlay)), { height: "".concat(height, "px"), width: "".concat(width, "px") }), src: image === null || image === void 0 ? void 0 : image.url, alt: title },
                        react_1.default.createElement(material_1.Box, null))),
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: 'subtitle2', color: "text.primary" }, title), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.description }, (0, helpers_1.truncate)(description, 80)) })))));
};
exports.default = AvatarList;
var sx = {
    listItem: {
        my: 0,
        p: 0,
    },
    gradient: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    overlay: {
        '&::after': {
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0,0,0,0.5)',
        },
    },
    listItemIcon: {
        width: 130,
        mr: 2,
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
    },
    avatar: {
        height: '64px',
        width: '64px',
        backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
    },
    description: {
        maxWidth: 320,
    },
};

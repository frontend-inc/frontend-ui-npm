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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var Card = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, ref = _a.ref, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, handleClick = _a.handleClick, _c = _a.objectFit, objectFit = _c === void 0 ? 'cover' : _c, _d = _a.height, height = _d === void 0 ? 240 : _d, _e = _a.enableUsers, enableUsers = _e === void 0 ? false : _e, _f = _a.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = _a.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = _a.enableFavorites, enableFavorites = _h === void 0 ? false : _h, _j = _a.enableRatings, enableRatings = _j === void 0 ? false : _j;
    var _k = resource || {}, label = _k.label, title = _k.title, image = _k.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { ref: ref, spacing: 0, sx: __assign(__assign({}, sx.root), { width: '100%', minHeight: height + 80 }) },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: height, objectFit: objectFit, alt: title, label: label, enableGradient: enableGradient, enableOverlay: enableOverlay, handleClick: handleItemClick })),
        react_1.default.createElement(material_1.Stack, { spacing: 0, sx: sx.cardContent },
            react_1.default.createElement(material_1.Box, { sx: sx.content },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "textPrimary", variant: "subtitle2" }, (0, helpers_1.truncate)(title)),
                enableRatings && (react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" })),
                (displayFields === null || displayFields === void 0 ? void 0 : displayFields.length) > 0 && (react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }))),
            react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "space-between" },
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 }, (resource === null || resource === void 0 ? void 0 : resource.user) && (react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user }))),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    enableFavorites == true && (react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
                    (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && (react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: resource })))))));
};
exports.default = Card;
var sx = {
    root: {
        overflow: 'hidden',
        borderRadius: 1,
        width: '100%',
        minWidth: 280,
        bgcolor: 'background.default',
        transition: 'box-shadow 0.3s',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
            boxShadow: 2
        }
    },
    imageContainer: {
        height: 230,
        minHeight: 230,
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    cardHeaderBorder: {
        px: 1
    },
    cardContent: {
        p: 1,
        width: '100%',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    content: {
        height: '100%'
    },
    title: {
        width: '100%',
    },
};

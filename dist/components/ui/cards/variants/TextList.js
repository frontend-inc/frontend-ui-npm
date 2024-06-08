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
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var __1 = require("../../..");
var CardList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, _c = _a.textVariant, textVariant = _c === void 0 ? 'subtitle1' : _c, handleClick = _a.handleClick, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = _a.enableFavorites, enableFavorites = _e === void 0 ? false : _e;
    var router = (0, router_1.useRouter)();
    var _f = resource || {}, title = _f.title, description = _f.description;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)) },
        react_1.default.createElement(material_1.Stack, { sx: sx.contentArea, direction: "row", spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
                react_1.default.createElement(material_1.Link, { onClick: handleItemClick },
                    react_1.default.createElement(material_1.Typography, { color: "textPrimary", variant: textVariant }, (0, helpers_1.truncate)(title))),
                react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2", sx: sx.description }, (0, helpers_1.truncate)(description, 200)))),
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end", sx: sx.actions },
            enableFavorites && react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle }),
            react_1.default.createElement(__1.Actions, { numVisible: 0, actions: actions, resource: resource }))));
};
exports.default = CardList;
var sx = {
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 1,
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
    rootBorder: {
        pl: 2,
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    image: {
        pr: {
            sm: 2,
            xs: 0,
        },
        mr: {
            sm: 2,
            xs: 0,
        },
        width: {
            sm: 220,
            xs: '100%',
        },
        minWidth: {
            sm: 220,
            xs: '100%',
        },
        height: '100%',
    },
    contentArea: {
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        py: {
            sm: 0,
            xs: 1,
        },
    },
    contentBorder: {
        py: 2,
        px: {
            sm: 0,
            xs: 2,
        },
    },
    description: {
        maxWidth: '600px',
    },
    actions: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
};

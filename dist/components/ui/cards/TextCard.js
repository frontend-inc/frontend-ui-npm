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
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var __1 = require("../..");
var CardList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, handleClick = _a.handleClick, _c = _a.enableUsers, enableUsers = _c === void 0 ? false : _c, _d = _a.enableComments, enableComments = _d === void 0 ? false : _d, _e = _a.enableFavorites, enableFavorites = _e === void 0 ? false : _e, _f = _a.enableRatings, enableRatings = _f === void 0 ? false : _f;
    var router = (0, router_1.useRouter)();
    var _g = resource || {}, title = _g.title, description = _g.description;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.content },
                react_1.default.createElement(material_1.Link, { sx: sx.link, onClick: handleItemClick },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: 'subtitle2' }, (0, helpers_1.truncate)(title))),
                enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" })),
                react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                react_1.default.createElement(material_1.Typography, { color: "text.secondary", variant: "body2", sx: sx.description }, (0, helpers_1.truncate)(description, 200)),
                enableUsers == true && react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user }))),
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end", sx: sx.actions },
            enableComments == true && react_1.default.createElement(__1.CommentButton, { resource: resource }),
            enableFavorites == true && (react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
            react_1.default.createElement(__1.Actions, { numVisible: 0, actions: actions, resource: resource }))));
};
exports.default = CardList;
var sx = {
    root: {
        pt: 1,
        pb: 2,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        cursor: 'auto',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    description: {
        maxWidth: '600px',
    },
    actions: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};

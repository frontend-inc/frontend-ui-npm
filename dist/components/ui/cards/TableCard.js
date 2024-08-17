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
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var __2 = require("../..");
var TableCard = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, buttons = _a.buttons, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, _c = _a.height, height = _c === void 0 ? 100 : _c, handleClick = _a.handleClick, _d = _a.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = _a.enableOverlay, enableOverlay = _e === void 0 ? false : _e, _f = _a.enableFavorites, enableFavorites = _f === void 0 ? false : _f, _g = _a.enableRatings, enableRatings = _g === void 0 ? false : _g, _h = _a.enableUsers, enableUsers = _h === void 0 ? false : _h;
    var router = (0, router_1.useRouter)();
    var _j = resource || {}, label = _j.label, title = _j.title, image = _j.image;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Box, { sx: sx.grid },
            react_1.default.createElement(material_1.Box, { sx: sx.imageItem },
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                        react_1.default.createElement(__1.Image, { src: image === null || image === void 0 ? void 0 : image.url, height: height, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay })))),
            react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, (0, helpers_1.truncate)(title))),
            enableRatings == true && (react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" }))), displayFields === null || displayFields === void 0 ? void 0 :
            displayFields.map(function (field, index) { return (react_1.default.createElement(material_1.Box, { sx: sx.item, key: index },
                react_1.default.createElement(__1.DisplayField, { key: index, field: field, resource: resource }))); }),
            enableUsers == true && (react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })))),
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" },
            enableFavorites == true && (react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
            react_1.default.createElement(__2.ButtonActions, { numVisible: 0, buttons: buttons, resource: resource }))));
};
exports.default = TableCard;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        pt: 1,
        pb: 2,
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
        justifyContent: 'space-between',
    },
    grid: {
        width: '100%',
        display: {
            sm: 'grid',
            xs: 'flex',
        },
        gridTemplateColumns: 'repeat(auto-fill, 140px)',
        gap: '12px',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: 140,
        minWidth: 140,
    },
    container: {
        width: '100%',
    },
    imageItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        width: 100,
        maxWidth: 100,
        height: '100%',
    },
    contentArea: {
        width: '100%',
    },
    contentAreaBorder: {
        pr: 1,
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
        px: {
            sm: 0,
            xs: 2,
        },
    },
    description: {
        maxWidth: '320px',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonsBorder: {
        px: 1,
        pb: {
            sm: 0,
            xs: 1,
        },
    },
};

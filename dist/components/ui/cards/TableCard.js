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
var __1 = require("../..");
var TableCard = function (props) {
    var _a = props || {}, label = _a.label, primary = _a.primary, secondary = _a.secondary, secondaryAction = _a.secondaryAction, handleClick = _a.handleClick, image = _a.image, _b = _a.height, height = _b === void 0 ? 240 : _b, _c = _a.slots, slots = _c === void 0 ? {
        item: {},
        image: {}
    } : _c;
    return (react_1.default.createElement(material_1.Stack, __assign({ direction: "row", spacing: 1, sx: sx.root }, slots.item),
        react_1.default.createElement(material_1.Box, { sx: sx.grid },
            react_1.default.createElement(material_1.Box, { sx: sx.imageItem },
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleClick },
                        react_1.default.createElement(__1.Image, __assign({ src: image, height: height, alt: primary }, slots.image))))),
            react_1.default.createElement(material_1.Box, { sx: sx.item },
                react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: "body1" }, primary)),
            secondary),
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" }, secondaryAction)));
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

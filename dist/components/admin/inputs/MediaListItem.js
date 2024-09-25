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
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var MediaItem = function (props) {
    var _a;
    var item = props.item, _b = props.size, size = _b === void 0 ? 180 : _b, selected = props.selected, handleClick = props.handleClick, handleRemoveItem = props.handleRemoveItem;
    var _c = (0, react_1.useState)(''), contentType = _c[0], setContentType = _c[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setContentType((_a = item === null || item === void 0 ? void 0 : item.content_type) === null || _a === void 0 ? void 0 : _a.split('/')[0]);
    }, [item]);
    return (react_1.default.createElement(material_1.Card, { sx: __assign(__assign({}, sx.root), (selected && sx.selected)) },
        react_1.default.createElement(material_1.CardHeader, { sx: sx.header, title: react_1.default.createElement(components_1.Label, { label: (_a = item === null || item === void 0 ? void 0 : item.content_type) === null || _a === void 0 ? void 0 : _a.split('/')[1] }), action: handleRemoveItem && (react_1.default.createElement(components_1.MenuButton, null,
                react_1.default.createElement(material_1.MenuItem, { onClick: function () { return handleRemoveItem(item); } },
                    react_1.default.createElement(material_1.Typography, { variant: "body2", color: "textPrimary" }, "Remove")))) }),
        react_1.default.createElement(material_1.CardActionArea, { onClick: function () { return (handleClick ? handleClick(item) : null); } }, contentType == 'image' || contentType == 'video' ? (react_1.default.createElement(components_1.Image, { disableBorderRadius: true, height: size, width: size, src: item === null || item === void 0 ? void 0 : item.url, alt: item === null || item === void 0 ? void 0 : item.content_type, objectFit: 'cover' })) : (react_1.default.createElement(components_1.AttachmentImage, { icon: "File", width: size, height: size })))));
};
exports.default = MediaItem;
var sx = {
    root: {
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        p: 0,
        minWidth: '120px',
        height: 200,
    },
    selected: {
        borderColor: 'primary.main',
    },
    header: {
        py: 0,
        px: 1,
    },
    gradient: {
        backgroundImage: 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
        minWidth: '120px',
        height: '100%',
        backgroundSize: 'cover',
    },
    image: {
        objectFit: 'cover',
    },
};

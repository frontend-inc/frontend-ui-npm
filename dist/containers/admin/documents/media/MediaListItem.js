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
var components_1 = require("../../../../components");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var MediaListItem = function (props) {
    var item = props.item, handleClick = props.handleClick, _a = props.selected, selected = _a === void 0 ? false : _a;
    return (react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.listItem), (selected && sx.selected)), secondaryAction: react_1.default.createElement(components_1.Label, { label: "".concat(item === null || item === void 0 ? void 0 : item.width, "x").concat(item === null || item === void 0 ? void 0 : item.height) }) },
        react_1.default.createElement(material_1.ListItemButton, { onClick: handleClick },
            react_1.default.createElement(material_1.ListItemIcon, null,
                react_1.default.createElement(image_1.default, { height: 50, width: 50, src: item === null || item === void 0 ? void 0 : item.thumbnail_url, alt: item === null || item === void 0 ? void 0 : item.title, style: {
                        width: '100%',
                        objectFit: 'cover',
                    } })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(components_1.Label, { label: item === null || item === void 0 ? void 0 : item.content_type }) }))));
};
exports.default = MediaListItem;
var sx = {
    listItem: {
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'border-color 0.2s ease-in-out',
        p: 0,
        mb: 1,
    },
    selected: {
        borderColor: 'primary.main',
    },
    image: {
        marginRight: '10px',
        objectFit: 'contain',
    },
};

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
var icons_material_1 = require("@mui/icons-material");
var SortableListItem = function (props) {
    var title = props.title, subtitle = props.subtitle, isDragging = props.isDragging;
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, sx: __assign(__assign({}, sx.item), (isDragging && sx.isDragging)) },
        react_1.default.createElement(material_1.ListItemIcon, null,
            react_1.default.createElement(icons_material_1.DragIndicator, { sx: sx.icon })),
        react_1.default.createElement(material_1.ListItemText, { primary: title, secondary: subtitle })));
};
exports.default = SortableListItem;
var sx = {
    item: {},
    icon: {
        color: "text.secondary",
    },
    isDragging: {},
};

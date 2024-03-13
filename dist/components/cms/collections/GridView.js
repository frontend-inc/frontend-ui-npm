"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var GridView = function (props) {
    var items = props.items, editing = props.editing, buttonText = props.buttonText, handleClick = props.handleClick, _a = props.xs, xs = _a === void 0 ? 12 : _a, _b = props.sm, sm = _b === void 0 ? 6 : _b, _c = props.md, md = _c === void 0 ? 4 : _c, _d = props.lg, lg = _d === void 0 ? 4 : _d, _e = props.xl, xl = _e === void 0 ? 4 : _e, _f = props.component, Component = _f === void 0 ? __1.CardVert : _f, _g = props.enableBorder, enableBorder = _g === void 0 ? false : _g, _h = props.enableGradient, enableGradient = _h === void 0 ? false : _h, _j = props.enableOverlay, enableOverlay = _j === void 0 ? false : _j;
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 0 }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        var _a, _b;
        return (react_1.default.createElement(material_1.Grid, { item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl },
            react_1.default.createElement(material_1.Box, { sx: sx.item, key: item === null || item === void 0 ? void 0 : item.id },
                react_1.default.createElement(Component, { key: index, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: (_a = item === null || item === void 0 ? void 0 : item.image) === null || _a === void 0 ? void 0 : _a.url, video: (_b = item === null || item === void 0 ? void 0 : item.video) === null || _b === void 0 ? void 0 : _b.url, editing: editing, buttonText: buttonText, handleClick: function () { return handleClick(item); }, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay }))));
    })));
};
exports.default = GridView;
var sx = {
    item: {
        p: 0.5,
    },
};

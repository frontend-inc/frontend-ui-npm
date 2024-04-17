"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var ImageView = function (props) {
    var items = props.items, editing = props.editing, buttonText = props.buttonText, handleClick = props.handleClick, _a = props.xs, xs = _a === void 0 ? 12 : _a, _b = props.sm, sm = _b === void 0 ? 6 : _b, _c = props.md, md = _c === void 0 ? 4 : _c, _d = props.lg, lg = _d === void 0 ? 4 : _d, _e = props.xl, xl = _e === void 0 ? 4 : _e, _f = props.component, Component = _f === void 0 ? __1.Card : _f;
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 2 }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        var _a;
        return (react_1.default.createElement(material_1.Grid, { item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl },
            react_1.default.createElement(Component, { key: index, direction: "row", image: (_a = item === null || item === void 0 ? void 0 : item.image) === null || _a === void 0 ? void 0 : _a.url, editing: editing, buttonText: buttonText, handleClick: handleClick, width: 520, height: 200 })));
    })));
};
exports.default = ImageView;

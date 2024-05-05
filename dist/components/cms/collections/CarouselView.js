"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var CarouselView = function (props) {
    var items = props.items, editing = props.editing, buttonText = props.buttonText, handleClick = props.handleClick, _a = props.component, Component = _a === void 0 ? components_1.Card : _a, _b = props.enableAutoPlay, enableAutoPlay = _b === void 0 ? false : _b, _c = props.enableArrows, enableArrows = _c === void 0 ? false : _c, _d = props.enableDots, enableDots = _d === void 0 ? true : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g;
    return (react_1.default.createElement(components_1.Carousel, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows, enableDots: enableDots }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        var _a, _b;
        return (react_1.default.createElement(material_1.Box, { sx: sx.item },
            react_1.default.createElement(Component, { key: index, editing: editing, variant: "grid", title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: (_a = item === null || item === void 0 ? void 0 : item.image) === null || _a === void 0 ? void 0 : _a.url, video: (_b = item === null || item === void 0 ? void 0 : item.video) === null || _b === void 0 ? void 0 : _b.url, buttonText: buttonText, handleClick: function () { return handleClick(item); }, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })));
    })));
};
exports.default = CarouselView;
var sx = {
    item: {
        pb: 4,
        px: 1,
    },
};

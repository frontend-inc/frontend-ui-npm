"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var __1 = require("../..");
var router_1 = require("next/router");
var CoverCarousel = function (props) {
    var router = (0, router_1.useRouter)();
    var _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.items, items = _b === void 0 ? [] : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c, _d = props.opacity, opacity = _d === void 0 ? 0.5 : _d, _e = props.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = props.enableArrows, enableArrows = _f === void 0 ? false : _f, _g = props.enableAutoPlay, enableAutoPlay = _g === void 0 ? false : _g, _h = props.overlayColor, overlayColor = _h === void 0 ? '#000000' : _h, _j = props.alignItems, alignItems = _j === void 0 ? 'center' : _j;
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var handleClick = function (item) {
        if (!editing && (item === null || item === void 0 ? void 0 : item.url)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(item === null || item === void 0 ? void 0 : item.url));
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(__1.Cover, { key: index, editing: editing, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: item === null || item === void 0 ? void 0 : item.image, buttonText: item === null || item === void 0 ? void 0 : item.buttonText, enableOverlay: enableOverlay, enableGradient: enableGradient, opacity: opacity, handleClick: function () { return handleClick(item); }, overlayColor: overlayColor, alignItems: alignItems })); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Placeholder, { icon: "Image", title: "No cover images", description: "Cover images will appear here." }))));
};
exports.default = CoverCarousel;

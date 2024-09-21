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
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var frontend_js_1 = require("frontend-js");
var ProductCollectionCoverCarouselListItems = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var href = props.href, height = props.height, buttonText = props.buttonText, _a = props.enableAutoPlay, enableAutoPlay = _a === void 0 ? true : _a, _b = props.enableArrows, enableArrows = _b === void 0 ? false : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableOverlay, enableOverlay = _d === void 0 ? false : _d;
    var _e = (0, frontend_js_1.useResourceContext)(), loading = _e.loading, resources = _e.resources;
    var handleClick = function (resource) {
        if (clientUrl && href && (resource === null || resource === void 0 ? void 0 : resource.handle)) {
            router.push("".concat(clientUrl).concat(href, "/").concat(resource === null || resource === void 0 ? void 0 : resource.handle));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: __assign(__assign(__assign({}, sx.root), (loading && sx.loading)), { height: height }) },
        react_1.default.createElement(__1.Swipeable, { enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) {
            var _a;
            return (react_1.default.createElement(__1.Cover, { key: index, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, title: resource === null || resource === void 0 ? void 0 : resource.title, handleClick: function () { return handleClick(resource); }, enableGradient: enableGradient, enableOverlay: enableOverlay, buttonText: buttonText }));
        }))));
};
exports.default = ProductCollectionCoverCarouselListItems;
var sx = {
    root: {
        width: '100%',
    },
    loading: {
        opacity: 0.5,
    },
};

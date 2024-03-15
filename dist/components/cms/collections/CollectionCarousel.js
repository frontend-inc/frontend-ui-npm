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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var __1 = require("../..");
var material_2 = require("@mui/material");
var context_1 = require("../../../context");
var router_1 = require("next/router");
var CollectionCard_1 = __importDefault(require("./CollectionCard"));
var CollectionCarousel = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var title = props.title, url = props.url, _a = props.style, style = _a === void 0 ? 'card' : _a, _b = props.query, defaultQuery = _b === void 0 ? {} : _b, _c = props.perPage, perPage = _c === void 0 ? 20 : _c, navigateUrl = props.navigateUrl, buttonText = props.buttonText, _d = props.enableAutoPlay, enableAutoPlay = _d === void 0 ? false : _d, _e = props.enableArrows, enableArrows = _e === void 0 ? false : _e, _f = props.enableDots, enableDots = _f === void 0 ? true : _f, _g = props.enableBorder, enableBorder = _g === void 0 ? false : _g, _h = props.enableGradient, enableGradient = _h === void 0 ? false : _h;
    var _j = (0, frontend_js_1.useResource)({
        url: url,
    }), findMany = _j.findMany, resources = _j.resources;
    var handleClick = function (item) {
        if (clientUrl && navigateUrl && (item === null || item === void 0 ? void 0 : item.handle)) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            router.push("".concat(clientUrl).concat(navigateUrl, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        if (url && defaultQuery && perPage) {
            findMany(__assign(__assign({}, defaultQuery), { per_page: perPage }));
        }
    }, [url, defaultQuery, perPage]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_2.Typography, { variant: "h5", color: "textPrimary" }, title),
        react_1.default.createElement(__1.Carousel, { enableDots: enableDots, enableAutoPlay: enableAutoPlay, enableArrows: enableArrows }, resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) {
            var _a, _b;
            return (react_1.default.createElement(CollectionCard_1.default, { key: index, layout: 'grid', style: style, title: resource === null || resource === void 0 ? void 0 : resource.title, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, video: (_b = resource === null || resource === void 0 ? void 0 : resource.video) === null || _b === void 0 ? void 0 : _b.url, description: resource === null || resource === void 0 ? void 0 : resource.description, buttonText: buttonText, handleClick: function () { return handleClick(resource); }, enableBorder: enableBorder, enableGradient: enableGradient }));
        }))));
};
exports.default = CollectionCarousel;
var sx = {
    root: {
        width: '100%',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px'
    },
    item: {
        p: 2
    }
};

"use strict";
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
var webstudio_shopify_1 = require("webstudio-shopify");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var webstudio_shopify_2 = require("webstudio-shopify");
var navigation_1 = require("next/navigation");
var Collections = function (props) {
    var title = props.title, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.perPage, perPage = _b === void 0 ? 20 : _b, _c = props.layout, layout = _c === void 0 ? "grid" : _c, _d = props.style, style = _d === void 0 ? "card" : _d, buttonText = props.buttonText, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f;
    var router = (0, navigation_1.useRouter)();
    var _g = (0, webstudio_shopify_1.useCollections)(), loading = _g.loading, collections = _g.collections, fetchCollections = _g.fetchCollections;
    var shopUrl = (0, react_1.useContext)(webstudio_shopify_2.ShopContext).shopUrl;
    var handleClick = function (collection) {
        if (!editing && shopUrl) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            router.push("".concat(shopUrl, "/collections/").concat(collection === null || collection === void 0 ? void 0 : collection.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        fetchCollections();
    }, []);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Typography, { variant: "h6", color: "textPrimary" }, title),
        react_1.default.createElement(components_1.StyledList, { layout: layout, 
            //@ts-ignore
            style: style, resources: collections, editing: editing, loading: loading, items: collections, buttonText: buttonText, handleClick: handleClick, enableBorder: enableBorder, enableGradient: enableGradient })));
};
exports.default = Collections;
var sx = {
    root: {
        width: "100%",
    },
};

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
var frontend_shopify_1 = require("frontend-shopify");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var context_1 = require("../../../context");
var components_1 = require("../../../components");
var Collections = function (props) {
    var href = props.href, _a = props.enableGradient, enableGradient = _a === void 0 ? false : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b;
    var router = (0, router_1.useRouter)();
    var _c = (0, frontend_shopify_1.useCollections)(), loading = _c.loading, collections = _c.collections, findCollections = _c.findCollections;
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var handleClick = function (collection) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        if (href) {
            router.push("".concat(clientUrl).concat(href, "/").concat(collection === null || collection === void 0 ? void 0 : collection.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        findCollections();
    }, []);
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root }, collections === null || collections === void 0 ? void 0 : collections.map(function (collection, index) { return (react_1.default.createElement(components_1.CollectionCard, { key: index, collection: collection, handleClick: function () { return handleClick(collection); }, enableGradient: enableGradient, enableOverlay: enableOverlay })); })));
};
exports.default = Collections;
var sx = {
    root: {
        width: '100%',
    },
};

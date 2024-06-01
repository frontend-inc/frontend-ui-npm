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
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var context_1 = require("../../../context");
var Collections = function (props) {
    var href = props.href, _a = props.variant, variant = _a === void 0 ? 'grid' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, buttonText = props.buttonText, _c = props.enableBorder, enableBorder = _c === void 0 ? false : _c, _d = props.enableGradient, enableGradient = _d === void 0 ? false : _d, _e = props.enableOverlay, enableOverlay = _e === void 0 ? false : _e;
    var router = (0, router_1.useRouter)();
    var _f = (0, frontend_shopify_1.useCollections)(), loading = _f.loading, collections = _f.collections, findCollections = _f.findCollections;
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
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(components_1.CardList, { actions: [], variant: variant, style: style, resources: collections, buttonText: buttonText, handleClick: handleClick, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay, enableEdit: false, enableDelete: false, handleEdit: function () { return null; }, handleDelete: function () { return null; } })));
};
exports.default = Collections;
var sx = {
    root: {
        width: '100%',
    },
};

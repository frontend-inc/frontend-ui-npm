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
var shopify_1 = require("../../../components/shopify");
var frontend_shopify_1 = require("frontend-shopify");
var ProductCollectionByHandle = function (props) {
    var handle = props.handle, _a = props.enableTitle, enableTitle = _a === void 0 ? false : _a, _b = props.layout, layout = _b === void 0 ? 'grid' : _b, _c = props.editing, editing = _c === void 0 ? false : _c, inStockFilter = props.inStockFilter, productComponent = props.productComponent, colorOptions = props.colorOptions, sizeOptions = props.sizeOptions, styleOptions = props.styleOptions, materialOptions = props.materialOptions, vendorOptions = props.vendorOptions, productTypeOptions = props.productTypeOptions, tagOptions = props.tagOptions, _d = props.enableFilters, enableFilters = _d === void 0 ? false : _d, _e = props.enableSort, enableSort = _e === void 0 ? false : _e, _f = props.autoPlay, autoPlay = _f === void 0 ? false : _f, _g = props.arrows, arrows = _g === void 0 ? false : _g, _h = props.showDots, showDots = _h === void 0 ? true : _h, _j = props.enableBorder, enableBorder = _j === void 0 ? false : _j, _k = props.enableAddToCart, enableAddToCart = _k === void 0 ? false : _k, _l = props.enableQuickShop, enableQuickShop = _l === void 0 ? false : _l, _m = props.enableQuantity, enableQuantity = _m === void 0 ? false : _m, _o = props.enableOkendoStarRating, enableOkendoStarRating = _o === void 0 ? false : _o;
    var _p = (0, frontend_shopify_1.useCollections)(), loading = _p.loading, collection = _p.collection, fetchCollection = _p.fetchCollection;
    (0, react_1.useEffect)(function () {
        if (handle) {
            fetchCollection(handle);
        }
    }, [handle]);
    return (react_1.default.createElement(shopify_1.ProductCollection, { handle: handle, title: enableTitle && (collection === null || collection === void 0 ? void 0 : collection.title), layout: layout, editing: editing, inStockFilter: inStockFilter, productComponent: productComponent, colorOptions: colorOptions, sizeOptions: sizeOptions, styleOptions: styleOptions, materialOptions: materialOptions, vendorOptions: vendorOptions, productTypeOptions: productTypeOptions, tagOptions: tagOptions, enableFilters: enableFilters, enableSort: enableSort, autoPlay: autoPlay, arrows: arrows, showDots: showDots, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating }));
};
exports.default = ProductCollectionByHandle;

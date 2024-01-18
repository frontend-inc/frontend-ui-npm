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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var shopify_1 = require("components/shopify");
var shopify_2 = require("@webstudio/shopify");
var DesktopFilters_1 = __importDefault(require("./DesktopFilters"));
var MobileFilters_1 = __importDefault(require("./MobileFilters"));
var CollectionFilters = function (props) {
    var _a = (0, react_1.useState)(0), colorsCount = _a[0], setColorsCount = _a[1];
    var _b = (0, react_1.useState)(0), sizesCount = _b[0], setSizesCount = _b[1];
    var _c = (0, react_1.useState)(0), stylesCount = _c[0], setStylesCount = _c[1];
    var _d = (0, react_1.useState)(0), materialsCount = _d[0], setMaterialsCount = _d[1];
    var _e = (0, react_1.useState)(0), vendorsCount = _e[0], setVendorsCount = _e[1];
    var _f = (0, react_1.useState)(0), productTypesCount = _f[0], setProductTypesCount = _f[1];
    var _g = (0, react_1.useState)(0), tagsCount = _g[0], setTagsCount = _g[1];
    var filters = props.filters, _h = props.enableInStockFilter, enableInStockFilter = _h === void 0 ? false : _h, colorOptions = props.colorOptions, sizeOptions = props.sizeOptions, styleOptions = props.styleOptions, materialOptions = props.materialOptions, vendorOptions = props.vendorOptions, tagOptions = props.tagOptions, productTypeOptions = props.productTypeOptions, handleFilterColor = props.handleFilterColor, handleFilterSize = props.handleFilterSize, handleFilterStyle = props.handleFilterStyle, handleFilterMaterial = props.handleFilterMaterial, handleFilterVendor = props.handleFilterVendor, handleFilterProductType = props.handleFilterProductType, handleFilterTag = props.handleFilterTag, handleFilterInStock = props.handleFilterInStock;
    (0, react_1.useEffect)(function () {
        if (filters) {
            setColorsCount((0, shopify_2.findColorFilters)(filters).length);
            setSizesCount((0, shopify_2.findSizeFilters)(filters).length);
            setStylesCount((0, shopify_2.findStyleFilters)(filters).length);
            setMaterialsCount((0, shopify_2.findMaterialFilters)(filters).length);
            setVendorsCount((0, shopify_2.findVendorFilters)(filters).length);
            setProductTypesCount((0, shopify_2.findProductTypeFilters)(filters).length);
            setTagsCount((0, shopify_2.findTagFilters)(filters).length);
        }
    }, [filters]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DesktopFilters_1.default, null,
            colorOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Colors", count: colorsCount },
                react_1.default.createElement(shopify_1.ColorFilters, { filters: filters, options: colorOptions, handleClick: handleFilterColor }))),
            sizeOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Size", count: sizesCount },
                react_1.default.createElement(shopify_1.SizeFilters, { filters: filters, options: sizeOptions, handleClick: handleFilterSize }))),
            styleOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Style", count: stylesCount },
                react_1.default.createElement(shopify_1.StyleFilters, { filters: filters, options: styleOptions, handleClick: handleFilterStyle }))),
            materialOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Material", count: materialsCount },
                react_1.default.createElement(shopify_1.MaterialFilters, { filters: filters, options: materialOptions, handleClick: handleFilterMaterial }))),
            vendorOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Tags", count: tagsCount },
                react_1.default.createElement(shopify_1.TagFilters, { filters: filters, options: tagOptions, handleClick: handleFilterTag }))),
            vendorOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Vendor", count: vendorsCount },
                react_1.default.createElement(shopify_1.VendorFilters, { filters: filters, options: vendorOptions, handleClick: handleFilterVendor }))),
            productTypeOptions && (react_1.default.createElement(shopify_1.FilterButton, { label: "Product Type", count: productTypesCount },
                react_1.default.createElement(shopify_1.ProductTypeFilters, { filters: filters, options: productTypeOptions, handleClick: handleFilterProductType }))),
            enableInStockFilter && (react_1.default.createElement(shopify_1.FilterButton, { label: "In-Stock" },
                react_1.default.createElement(shopify_1.InStockFilter, { filters: filters, handleClick: handleFilterInStock })))),
        react_1.default.createElement(MobileFilters_1.default, null,
            colorOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Colors", count: colorsCount },
                react_1.default.createElement(shopify_1.ColorFilters, { filters: filters, options: colorOptions, handleClick: handleFilterColor }))),
            sizeOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Size", count: sizesCount },
                react_1.default.createElement(shopify_1.SizeFilters, { filters: filters, options: sizeOptions, handleClick: handleFilterSize }))),
            styleOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Style", count: stylesCount },
                react_1.default.createElement(shopify_1.StyleFilters, { filters: filters, options: styleOptions, handleClick: handleFilterStyle }))),
            materialOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Material", count: materialsCount },
                react_1.default.createElement(shopify_1.MaterialFilters, { filters: filters, options: materialOptions, handleClick: handleFilterMaterial }))),
            vendorOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Tags", count: tagsCount },
                react_1.default.createElement(shopify_1.TagFilters, { filters: filters, options: tagOptions, handleClick: handleFilterTag }))),
            vendorOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Vendor", count: vendorsCount },
                react_1.default.createElement(shopify_1.VendorFilters, { filters: filters, options: vendorOptions, handleClick: handleFilterVendor }))),
            productTypeOptions && (react_1.default.createElement(shopify_1.FilterList, { label: "Product Type", count: productTypesCount },
                react_1.default.createElement(shopify_1.ProductTypeFilters, { filters: filters, options: productTypeOptions, handleClick: handleFilterProductType }))),
            enableInStockFilter && (react_1.default.createElement(shopify_1.FilterList, { label: "In-Stock" },
                react_1.default.createElement(shopify_1.InStockFilter, { filters: filters, handleClick: handleFilterInStock }))))));
};
exports.default = CollectionFilters;

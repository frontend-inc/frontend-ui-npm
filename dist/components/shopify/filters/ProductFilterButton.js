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
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var webstudio_shopify_1 = require("webstudio-shopify");
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var ProductFilterButton = function (props) {
    var _a = (0, react_1.useState)(0), colorsCount = _a[0], setColorsCount = _a[1];
    var _b = (0, react_1.useState)(0), sizesCount = _b[0], setSizesCount = _b[1];
    var _c = (0, react_1.useState)(0), stylesCount = _c[0], setStylesCount = _c[1];
    var _d = (0, react_1.useState)(0), materialsCount = _d[0], setMaterialsCount = _d[1];
    var _e = (0, react_1.useState)(0), vendorsCount = _e[0], setVendorsCount = _e[1];
    var _f = (0, react_1.useState)(0), productTypesCount = _f[0], setProductTypesCount = _f[1];
    var _g = (0, react_1.useState)(0), tagsCount = _g[0], setTagsCount = _g[1];
    var _h = (0, react_1.useState)(false), open = _h[0], setOpen = _h[1];
    var _j = (0, react_1.useState)(null), anchorEl = _j[0], setAnchorEl = _j[1];
    var handleClick = function (ev) {
        setAnchorEl(ev.currentTarget);
        setOpen(true);
    };
    var handleClose = function () { return setOpen(false); };
    var _k = props.filters, filters = _k === void 0 ? [] : _k, _l = props.enableInStockFilter, enableInStockFilter = _l === void 0 ? false : _l, _m = props.colorOptions, colorOptions = _m === void 0 ? [] : _m, _o = props.sizeOptions, sizeOptions = _o === void 0 ? [] : _o, _p = props.styleOptions, styleOptions = _p === void 0 ? [] : _p, _q = props.materialOptions, materialOptions = _q === void 0 ? [] : _q, _r = props.vendorOptions, vendorOptions = _r === void 0 ? [] : _r, _s = props.tagOptions, tagOptions = _s === void 0 ? [] : _s, _t = props.productTypeOptions, productTypeOptions = _t === void 0 ? [] : _t, handleFilterColor = props.handleFilterColor, handleFilterSize = props.handleFilterSize, handleFilterStyle = props.handleFilterStyle, handleFilterMaterial = props.handleFilterMaterial, handleFilterVendor = props.handleFilterVendor, handleFilterProductType = props.handleFilterProductType, handleFilterTag = props.handleFilterTag, handleFilterInStock = props.handleFilterInStock;
    (0, react_1.useEffect)(function () {
        if (filters) {
            setColorsCount((0, webstudio_shopify_1.findColorFilters)(filters).length);
            setSizesCount((0, webstudio_shopify_1.findSizeFilters)(filters).length);
            setStylesCount((0, webstudio_shopify_1.findStyleFilters)(filters).length);
            setMaterialsCount((0, webstudio_shopify_1.findMaterialFilters)(filters).length);
            setVendorsCount((0, webstudio_shopify_1.findVendorFilters)(filters).length);
            setProductTypesCount((0, webstudio_shopify_1.findProductTypeFilters)(filters).length);
            setTagsCount((0, webstudio_shopify_1.findTagFilters)(filters).length);
        }
    }, [filters]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "text", color: "secondary", startIcon: react_1.default.createElement(lucide_react_1.ListFilter, null) }, "Filter"),
        react_1.default.createElement(components_1.Popup, { anchorEl: anchorEl, open: open, handleClose: handleClose, p: 1 },
            react_1.default.createElement(material_1.Stack, { spacing: 2 },
                (colorOptions === null || colorOptions === void 0 ? void 0 : colorOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Colors", count: colorsCount },
                    react_1.default.createElement(shopify_1.ColorFilters, { filters: filters, options: colorOptions, handleClick: handleFilterColor }))),
                (sizeOptions === null || sizeOptions === void 0 ? void 0 : sizeOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Size", count: sizesCount },
                    react_1.default.createElement(shopify_1.SizeFilters, { filters: filters, options: sizeOptions, handleClick: handleFilterSize }))),
                (styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Style", count: stylesCount },
                    react_1.default.createElement(shopify_1.StyleFilters, { filters: filters, options: styleOptions, handleClick: handleFilterStyle }))),
                (materialOptions === null || materialOptions === void 0 ? void 0 : materialOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Material", count: materialsCount },
                    react_1.default.createElement(shopify_1.MaterialFilters, { filters: filters, options: materialOptions, handleClick: handleFilterMaterial }))),
                (tagOptions === null || tagOptions === void 0 ? void 0 : tagOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Tags", count: tagsCount },
                    react_1.default.createElement(shopify_1.TagFilters, { filters: filters, options: tagOptions, handleClick: handleFilterTag }))),
                (vendorOptions === null || vendorOptions === void 0 ? void 0 : vendorOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Vendor", count: vendorsCount },
                    react_1.default.createElement(shopify_1.VendorFilters, { filters: filters, options: vendorOptions, handleClick: handleFilterVendor }))),
                (productTypeOptions === null || productTypeOptions === void 0 ? void 0 : productTypeOptions.length) > 0 && (react_1.default.createElement(shopify_1.FilterList, { label: "Product Type", count: productTypesCount },
                    react_1.default.createElement(shopify_1.ProductTypeFilters, { filters: filters, options: productTypeOptions, handleClick: handleFilterProductType }))),
                enableInStockFilter && (react_1.default.createElement(shopify_1.FilterList, { label: "In-Stock" },
                    react_1.default.createElement(shopify_1.InStockFilter, { filters: filters, handleClick: handleFilterInStock })))))));
};
exports.default = ProductFilterButton;

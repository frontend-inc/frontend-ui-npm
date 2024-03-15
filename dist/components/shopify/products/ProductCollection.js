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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var shopify_1 = require("../../../components/shopify");
var components_1 = require("../../../components");
var ProductCollection = function (props) {
    var title = props.title, handle = props.handle, _a = props.editing, editing = _a === void 0 ? false : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.enableFilters, enableFilters = _c === void 0 ? false : _c, _d = props.enableSort, enableSort = _d === void 0 ? false : _d, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableAddToCart, enableAddToCart = _f === void 0 ? false : _f, _g = props.enableQuickShop, enableQuickShop = _g === void 0 ? false : _g, _h = props.enableQuantity, enableQuantity = _h === void 0 ? false : _h, _j = props.enableOkendoStarRating, enableOkendoStarRating = _j === void 0 ? false : _j;
    var _k = (0, react_1.useState)({}), query = _k[0], setQuery = _k[1];
    var _l = (0, react_1.useState)('COLLECTION_DEFAULT'), sortKey = _l[0], setSortKey = _l[1];
    var _m = (0, react_1.useState)(false), reverse = _m[0], setReverse = _m[1];
    var _o = (0, frontend_shopify_1.useCollections)(), loading = _o.loading, products = _o.products, findCollection = _o.findCollection;
    var _p = (0, frontend_shopify_1.useSearchFilters)(), filters = _p.filters, handleFilter = _p.handleFilter, handleFilterArray = _p.handleFilterArray;
    var handleSortClick = function (sortKey, reverse) {
        if (reverse === void 0) { reverse = false; }
        setSortKey(sortKey);
        setReverse(reverse);
    };
    // Shopify Storefront API docs
    // https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/products-collections/filter-products
    function formatFilters(filters) {
        var query = [];
        filters.forEach(function (filter) {
            var queryFilter = {};
            switch (filter.name) {
                case 'tag':
                    queryFilter['tag'] = filter.value;
                    break;
                case 'product_type':
                    queryFilter['productType'] = filter.value;
                    break;
                case 'vendor':
                    queryFilter['vendor'] = filter.value;
                    break;
                case 'available':
                    queryFilter['vendor'] = filter.value === 'true';
                    break;
                default:
                    queryFilter = {
                        variantOption: {
                            name: filter.name,
                            value: filter.value
                        }
                    };
            }
            query.push(queryFilter);
        });
        return query;
    }
    (0, react_1.useEffect)(function () {
        if (query) {
            findCollection(handle, query);
        }
    }, [query]);
    (0, react_1.useEffect)(function () {
        if (handle) {
            var searchFilters = formatFilters(filters);
            findCollection(handle, __assign(__assign({}, query), { sortKey: sortKey, reverse: reverse, filters: searchFilters }));
        }
    }, [handle, filters, sortKey, reverse]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 2 },
        react_1.default.createElement(components_1.Heading, { title: title }),
        react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
            enableFilters && (react_1.default.createElement(shopify_1.ProductFilters, { filters: filters, options: options, handleFilter: handleFilter, handleFilterArray: handleFilterArray })),
            enableSort && (react_1.default.createElement(shopify_1.ProductSort, { sortKey: sortKey, reverse: reverse, handleClick: handleSortClick }))),
        react_1.default.createElement(shopify_1.ProductGrid, { editing: editing, loading: loading, products: products, enableBorder: enableBorder, enableAddToCart: enableAddToCart, enableQuickShop: enableQuickShop, enableQuantity: enableQuantity, enableOkendoStarRating: enableOkendoStarRating })));
};
exports.default = ProductCollection;

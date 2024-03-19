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
var components_1 = require("../../../components");
var shopify_1 = require("../../../components/shopify");
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var addons_1 = require("../../../hooks/addons");
var lucide_react_1 = require("lucide-react");
var styles_1 = require("@mui/material/styles");
var SearchModal = function () {
    // Minimum number of characters to track analytics
    var theme = (0, styles_1.useTheme)();
    var MIN_ANALYTICS_CHARS = 5;
    var trackProductsSearched = (0, addons_1.useSegment)().trackProductsSearched;
    var _a = (0, react_1.useContext)(frontend_shopify_1.ShopContext), setMenuOpen = _a.setMenuOpen, searchOpen = _a.searchOpen, setSearchOpen = _a.setSearchOpen;
    var _b = (0, react_1.useState)(false), expanded = _b[0], setExpanded = _b[1];
    var _c = (0, react_1.useState)(''), keywords = _c[0], setKeywords = _c[1];
    var _d = (0, frontend_shopify_2.useProducts)(), loading = _d.loading, products = _d.products, setProducts = _d.setProducts, searchProducts = _d.searchProducts;
    var handleChange = function (ev) {
        setKeywords(ev.target.value);
    };
    var handleClose = function () {
        handleClear();
        setMenuOpen(false);
        setSearchOpen(false);
        setProducts(null);
        setExpanded(false);
    };
    var handleClear = function () { return setKeywords(''); };
    var handleSearch = function () {
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) >= MIN_ANALYTICS_CHARS) {
            trackProductsSearched(keywords);
        }
        setExpanded(true);
        searchProducts({ query: keywords });
    };
    (0, react_1.useEffect)(function () {
        if ((keywords === null || keywords === void 0 ? void 0 : keywords.length) > 0) {
            handleSearch();
        }
        else {
            setProducts(null);
            setExpanded(false);
        }
    }, [keywords]);
    return (react_1.default.createElement(material_1.SwipeableDrawer, { onOpen: function () { return null; }, open: searchOpen, anchor: "top", onClose: handleClose, PaperProps: { sx: sx.paper } },
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.container), (expanded && sx.expandedModal)) },
            react_1.default.createElement(material_1.AppBar, { elevation: 0, position: "sticky", color: "transparent" },
                react_1.default.createElement(material_1.Stack, { sx: sx.searchContainer, direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Box, { sx: sx.spacer }),
                    react_1.default.createElement(material_1.Box, { sx: sx.searchInput },
                        react_1.default.createElement(components_1.TextInput, { name: "keywords", value: keywords, handleChange: handleChange, placeholder: 'Search...' })),
                    react_1.default.createElement(material_1.Box, { sx: sx.spacer },
                        react_1.default.createElement(material_1.IconButton, { onClick: handleClose },
                            react_1.default.createElement(lucide_react_1.X, { size: 24, color: theme.palette.text.primary }))))),
            react_1.default.createElement(material_1.Container, { maxWidth: "md" },
                react_1.default.createElement(shopify_1.ProductGrid, { loading: loading, products: products, xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }),
                (keywords === null || keywords === void 0 ? void 0 : keywords.length) > 0 && !loading && (products === null || products === void 0 ? void 0 : products.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: 'Search', title: "No search results", description: "Try another search term" }))))));
};
exports.default = SearchModal;
var sx = {
    container: {
        width: '100vw',
        backgroundColor: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        transition: 'all 0.2s ease-in-out',
        overflowY: 'scroll',
    },
    expandedModal: {
        height: '90vh',
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        bgcolor: 'background.default',
        py: 2,
        px: 1,
    },
    searchInput: {
        width: '100%',
    },
    closeButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    placeholder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    spacer: {
        width: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        bgcolor: 'background.paper',
    },
};

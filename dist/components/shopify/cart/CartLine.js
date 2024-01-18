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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var shopify_1 = require("@webstudio/shopify");
var shopify_2 = require("@webstudio/shopify");
var addons_1 = require("../../../hooks/addons");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
var components_1 = require("../../../components");
var shopify_3 = require("@webstudio/shopify");
var router_1 = require("next/router");
var CartQuantityInput = function (props) {
    var quantity = props.quantity, handleAddQuantity = props.handleAddQuantity, handleRemoveQuantity = props.handleRemoveQuantity;
    return (react_1.default.createElement(material_1.ButtonGroup, { sx: sx.buttonGroup },
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleRemoveQuantity },
            react_1.default.createElement(components_1.Icon, { name: "Minus", size: 16 })),
        react_1.default.createElement(material_1.Button, { sx: sx.button }, quantity),
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleAddQuantity },
            react_1.default.createElement(components_1.Icon, { name: "Plus", size: 16 }))));
};
var CartLine = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var line = props.line;
    var router = (0, router_1.useRouter)();
    var trackRemoveFromCart = (0, addons_1.useSegment)().trackRemoveFromCart;
    var _j = (0, shopify_2.useCart)(), loading = _j.loading, cartLineRemove = _j.cartLineRemove, cartLineUpdate = _j.cartLineUpdate;
    var _k = (0, react_1.useContext)(shopify_1.ShopContext), shopUrl = _k.shopUrl, setCartOpen = _k.setCartOpen;
    var _l = line || {}, id = _l.id, quantity = _l.quantity, merchandise = _l.merchandise, sellingPlanAllocation = _l.sellingPlanAllocation;
    var _m = (0, react_1.useState)(null), price = _m[0], setPrice = _m[1];
    var _o = (0, react_1.useState)(null), compareAtPrice = _o[0], setCompareAtPrice = _o[1];
    var _p = merchandise || {}, 
    //@ts-ignore
    product = _p.product, amount = _p.price.amount, 
    //@ts-ignore
    compareAtAmount = _p.compareAtPrice, url = _p.image.url;
    var handleUpdateQuantity = function (quantity) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cartLineUpdate({ id: id, quantity: quantity })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAddQuantity = function () {
        handleUpdateQuantity(quantity + 1);
    };
    var handleRemoveQuantity = function (ev) {
        if (quantity == 1) {
            handleRemoveLineItem(ev);
        }
        else {
            handleUpdateQuantity(quantity - 1);
        }
    };
    var handleRemoveLineItem = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.stopPropagation();
                    return [4 /*yield*/, cartLineRemove(id)];
                case 1:
                    _a.sent();
                    trackRemoveFromCart({
                        quantity: quantity,
                        variant: merchandise,
                        product: product,
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function () {
        router.push("".concat(shopUrl, "/products/").concat(product === null || product === void 0 ? void 0 : product.handle));
        setCartOpen(false);
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if (((_a = sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.priceAdjustments) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            setPrice(sellingPlanAllocation.priceAdjustments[0].price.amount);
            setCompareAtPrice(sellingPlanAllocation.priceAdjustments[0].compareAtPrice.amount);
        }
        else {
            setPrice(amount);
            setCompareAtPrice(compareAtAmount === null || compareAtAmount === void 0 ? void 0 : compareAtAmount.amount);
        }
    }, [price, sellingPlanAllocation]);
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, sx: __assign(__assign({}, sx.root), (loading && sx.loading)), secondaryAction: react_1.default.createElement(material_1.IconButton, { onClick: handleRemoveLineItem, size: "small" },
            react_1.default.createElement(components_1.Icon, { name: "X", size: 20 })) },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(material_1.Badge, { badgeContent: quantity, color: "secondary" },
                react_1.default.createElement(components_1.TouchableOpacity, { handleClick: handleClick },
                    react_1.default.createElement(image_1.default, { alt: 
                        //@ts-ignore
                        (_b = (_a = line === null || line === void 0 ? void 0 : line.merchandise) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.title, src: url, height: 96, width: 96 })))),
        react_1.default.createElement(material_1.ListItemText, { primary: 
            //@ts-ignore
            (_d = (_c = line === null || line === void 0 ? void 0 : line.merchandise) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.title, secondary: react_1.default.createElement(material_1.Stack, { spacing: 0.5 },
                react_1.default.createElement(material_1.Typography, { variant: "body2" }, (_g = (_f = (_e = line === null || line === void 0 ? void 0 : line.merchandise) === null || _e === void 0 ? void 0 : _e.selectedOptions) === null || _f === void 0 ? void 0 : _f.filter(function (option) { return option.name != 'Title'; })) === null || _g === void 0 ? void 0 : _g.map(function (option, i) { return option.value; }).join(' / ')),
                (sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.sellingPlan) && (react_1.default.createElement(material_1.Typography, { variant: "body2", sx: sx.subscription }, (_h = sellingPlanAllocation === null || sellingPlanAllocation === void 0 ? void 0 : sellingPlanAllocation.sellingPlan) === null || _h === void 0 ? void 0 : _h.name)),
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Typography, { variant: "body2" },
                        price == 0 ? 'Free' : (0, shopify_3.formatCurrency)(price),
                        ' ')),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(CartQuantityInput, { quantity: quantity, handleAddQuantity: handleAddQuantity, handleRemoveQuantity: handleRemoveQuantity }))) })));
};
exports.default = CartLine;
var sx = {
    root: {},
    loading: {
        opacity: 0.3,
    },
    listItemIcon: {
        mr: 2,
    },
    buttonGroup: {
        bgcolor: 'tertiary.main',
        height: '28px',
        '& .MuiButton-root': {
            minWidth: '28px',
        },
    },
    button: {
        px: 0,
        color: 'text.primary',
        border: 'none',
        '&:hover': {
            border: 'none',
        },
        fontSize: function (theme) { return theme.typography.overline.fontSize; },
    },
    subscription: {
        fontStyle: 'italic',
    },
    compareAtPrice: {
        textDecoration: 'line-through',
        color: 'text.secondary',
        opacity: 0.6,
        fontSize: 12
    },
    secondaryAction: {
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
};

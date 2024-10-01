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
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var CartQuantityInput = function (props) {
    var quantity = props.quantity, handleAddQuantity = props.handleAddQuantity, handleRemoveQuantity = props.handleRemoveQuantity;
    return (react_1.default.createElement(material_1.ButtonGroup, { color: "secondary", variant: "contained", sx: sx.buttonGroup },
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleRemoveQuantity },
            react_1.default.createElement(components_1.Icon, { name: "Minus", size: 16 })),
        react_1.default.createElement(material_1.Button, { sx: sx.button }, quantity),
        react_1.default.createElement(material_1.Button, { sx: sx.button, onClick: handleAddQuantity },
            react_1.default.createElement(components_1.Icon, { name: "Plus", size: 16 }))));
};
var CartLineItem = function (props) {
    var _a;
    var lineItem = props.lineItem;
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _b = (0, hooks_1.useCart)(), loading = _b.loading, addQuantity = _b.addQuantity, removeQuantity = _b.removeQuantity, removeFromCart = _b.removeFromCart;
    var setCartOpen = (0, hooks_1.useCart)().setCartOpen;
    var _c = lineItem || {}, id = _c.id, quantity = _c.quantity, product = _c.product;
    var handleAddQuantity = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addQuantity(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveQuantity = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeQuantity(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemoveFromCart = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, removeFromCart(product === null || product === void 0 ? void 0 : product.id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function () {
        router.push("".concat(clientUrl, "/products/").concat(product === null || product === void 0 ? void 0 : product.handle));
        setCartOpen(false);
    };
    return (react_1.default.createElement(material_1.ListItem, { disableGutters: true, sx: __assign(__assign({}, sx.root), (loading && sx.loading)), secondaryAction: react_1.default.createElement(material_1.IconButton, { onClick: handleRemoveFromCart, size: "small" },
            react_1.default.createElement(components_1.Icon, { name: "X" })) },
        react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
            react_1.default.createElement(material_1.Badge, { badgeContent: quantity, color: "secondary" },
                react_1.default.createElement(material_1.Box, { sx: sx.image },
                    react_1.default.createElement(components_1.Image, { alt: (product === null || product === void 0 ? void 0 : product.title) || '', src: (_a = product === null || product === void 0 ? void 0 : product.image) === null || _a === void 0 ? void 0 : _a.url, height: 96, width: 96, handleClick: handleClick })))),
        react_1.default.createElement(material_1.ListItemText, { primary: product === null || product === void 0 ? void 0 : product.title, secondary: react_1.default.createElement(material_1.Stack, { spacing: 0.5 },
                react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1 },
                    react_1.default.createElement(material_1.Typography, { variant: "body2" }, product === null || product === void 0 ? void 0 : product.display_price)),
                react_1.default.createElement(material_1.Box, null,
                    react_1.default.createElement(CartQuantityInput, { quantity: quantity, handleAddQuantity: handleAddQuantity, handleRemoveQuantity: handleRemoveQuantity }))) })));
};
exports.default = CartLineItem;
var sx = {
    root: {},
    loading: {
        opacity: 0.3,
    },
    listItemIcon: {
        mr: 2,
        width: 96,
    },
    buttonGroup: {
        height: '28px',
        '& .MuiButton-root': {
            minWidth: '28px',
        },
    },
    button: {
        px: 0,
        height: '28px',
        color: 'text.primary',
        border: 'none !important',
        fontSize: function (theme) { return theme.typography.overline.fontSize; },
    },
    subscription: {
        fontStyle: 'italic',
    },
    compareAtPrice: {
        textDecoration: 'line-through',
        color: 'text.secondary',
        opacity: 0.6,
        fontSize: 12,
    },
    secondaryAction: {
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    image: {
        width: 96,
        height: 96,
    },
};

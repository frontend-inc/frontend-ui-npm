"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_shopify_1 = require("frontend-shopify");
var frontend_js_1 = require("frontend-js");
var react_gtm_hook_1 = require("@elgorditosalsero/react-gtm-hook");
var useGTM = function () {
    var cart = (0, frontend_shopify_1.useCart)().cart;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var sendDataToGTM = (0, react_gtm_hook_1.useGTMDispatch)();
    // Helper method to return just the numeric
    // parts of a Shopify GID
    var convertGidToId = function (gid) {
        var parts = gid.split('/');
        var id = parts[parts.length - 1];
        return id;
    };
    var trackProductAdded = function (_a) {
        var variant = _a.variant, quantity = _a.quantity, product = _a.product;
        return __awaiter(void 0, void 0, void 0, function () {
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, sendDataToGTM({
                            event: 'add_to_cart',
                            ecommerce: {
                                items: [
                                    {
                                        item_name: product === null || product === void 0 ? void 0 : product.title,
                                        item_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                                        item_variant_id: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                                        item_sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                                        item_url: window.location.href,
                                        image_url: (_b = variant === null || variant === void 0 ? void 0 : variant.image) === null || _b === void 0 ? void 0 : _b.url,
                                        price: (_c = variant === null || variant === void 0 ? void 0 : variant.price) === null || _c === void 0 ? void 0 : _c.amount,
                                        quantity: quantity,
                                        currency: 'USD',
                                        name: product === null || product === void 0 ? void 0 : product.title,
                                        url: window.location.href,
                                    },
                                ],
                            },
                        })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var trackRemoveFromCart = function (_a) {
        var _b, _c;
        var variant = _a.variant, quantity = _a.quantity, product = _a.product;
        sendDataToGTM({
            event: 'remove_from_cart',
            ecommerce: [
                {
                    cart_id: cart === null || cart === void 0 ? void 0 : cart.id,
                    product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                    category: product === null || product === void 0 ? void 0 : product.productType,
                    name: product === null || product === void 0 ? void 0 : product.title,
                    brand: product === null || product === void 0 ? void 0 : product.vendor,
                    variant: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                    price: (_b = variant === null || variant === void 0 ? void 0 : variant.price) === null || _b === void 0 ? void 0 : _b.amount,
                    quantity: quantity,
                    url: window.location.href,
                    image_url: (_c = variant === null || variant === void 0 ? void 0 : variant.image) === null || _c === void 0 ? void 0 : _c.url,
                },
            ],
        });
    };
    var trackCartViewed = function (checkout) {
        var _a, _b, _c, _d, _e;
        var products = checkout.lineItems.edges.map(function (line) {
            var _a, _b, _c;
            var variant = (_a = line === null || line === void 0 ? void 0 : line.node) === null || _a === void 0 ? void 0 : _a.variant;
            var product = variant === null || variant === void 0 ? void 0 : variant.product;
            return {
                product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                name: product === null || product === void 0 ? void 0 : product.title,
                price: (_b = variant === null || variant === void 0 ? void 0 : variant.price) === null || _b === void 0 ? void 0 : _b.amount,
                quantity: line === null || line === void 0 ? void 0 : line.node.quantity,
                brand: product === null || product === void 0 ? void 0 : product.vendor,
                variant: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                category: product === null || product === void 0 ? void 0 : product.productType,
                url: window.location.href,
                image_url: (_c = variant === null || variant === void 0 ? void 0 : variant.image) === null || _c === void 0 ? void 0 : _c.src,
            };
        });
        sendDataToGTM({
            event: 'cart_viewed',
            ecommerce: [
                {
                    order_id: checkout.id,
                    affiliation: 'oneroad',
                    value: (_a = checkout === null || checkout === void 0 ? void 0 : checkout.totalPrice) === null || _a === void 0 ? void 0 : _a.amount,
                    revenue: (_b = checkout === null || checkout === void 0 ? void 0 : checkout.totalPrice) === null || _b === void 0 ? void 0 : _b.amount,
                    coupon: (_c = checkout.discountApplications.edges) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e === null || e === void 0 ? void 0 : e.node; }).map(function (node) { return node === null || node === void 0 ? void 0 : node.code; }).join(', '),
                    currency: (_e = (_d = checkout === null || checkout === void 0 ? void 0 : checkout.cost) === null || _d === void 0 ? void 0 : _d.totalAmount) === null || _e === void 0 ? void 0 : _e.currencyCode,
                    products: products,
                },
            ],
        });
    };
    var identify = function (email) {
        sendDataToGTM({
            event: 'identify',
            email: email,
        });
    };
    var trackCheckoutStarted = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (((_a = cart === null || cart === void 0 ? void 0 : cart.lines) === null || _a === void 0 ? void 0 : _a.edges.length) > 0) {
            var products = cart.lines.edges.map(function (line) {
                var _a, _b, _c;
                var variant = (_a = line === null || line === void 0 ? void 0 : line.node) === null || _a === void 0 ? void 0 : _a.merchandise;
                var product = variant === null || variant === void 0 ? void 0 : variant.product;
                return {
                    product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,
                    sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                    name: product === null || product === void 0 ? void 0 : product.title,
                    price: (_b = variant === null || variant === void 0 ? void 0 : variant.price) === null || _b === void 0 ? void 0 : _b.amount,
                    quantity: line === null || line === void 0 ? void 0 : line.node.quantity,
                    brand: product === null || product === void 0 ? void 0 : product.vendor,
                    variant: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                    category: product === null || product === void 0 ? void 0 : product.productType,
                    url: window.location.href,
                    image_url: (_c = variant === null || variant === void 0 ? void 0 : variant.image) === null || _c === void 0 ? void 0 : _c.src,
                };
            });
            sendDataToGTM({
                event: 'checkout_started',
                ecommerce: [
                    {
                        order_id: cart.id,
                        userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,
                        value: ((_c = (_b = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _b === void 0 ? void 0 : _b.totalAmount) === null || _c === void 0 ? void 0 : _c.amount) + ((_d = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _d === void 0 ? void 0 : _d.totalTaxAmount),
                        revenue: (_f = (_e = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _e === void 0 ? void 0 : _e.totalAmount) === null || _f === void 0 ? void 0 : _f.amount,
                        shipping: 0,
                        tax: (_g = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _g === void 0 ? void 0 : _g.totalTaxAmount,
                        discounts: ((_j = (_h = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _h === void 0 ? void 0 : _h.subtotalAmount) === null || _j === void 0 ? void 0 : _j.amount) -
                            ((_l = (_k = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _k === void 0 ? void 0 : _k.totalAmount) === null || _l === void 0 ? void 0 : _l.amount) -
                            ((_m = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _m === void 0 ? void 0 : _m.totalTaxAmount),
                        coupon: cart.discountCodes.join(','),
                        currency: (_p = (_o = cart === null || cart === void 0 ? void 0 : cart.cost) === null || _o === void 0 ? void 0 : _o.totalAmount) === null || _p === void 0 ? void 0 : _p.currencyCode,
                        products: products,
                    },
                ],
            });
        }
    };
    var trackProductRemoved = function (line) {
        var _a, _b;
        var variant = line === null || line === void 0 ? void 0 : line.merchandise;
        var product = variant === null || variant === void 0 ? void 0 : variant.product;
        sendDataToGTM({
            event: 'remove_from_cart',
            ecommerce: [
                {
                    cart_id: cart === null || cart === void 0 ? void 0 : cart.id,
                    product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,
                    sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                    category: product === null || product === void 0 ? void 0 : product.productType,
                    name: product === null || product === void 0 ? void 0 : product.title,
                    brand: product === null || product === void 0 ? void 0 : product.vendor,
                    variant: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                    price: (_a = variant === null || variant === void 0 ? void 0 : variant.price) === null || _a === void 0 ? void 0 : _a.amount,
                    quantity: line === null || line === void 0 ? void 0 : line.quantity,
                    url: window.location.href,
                    image_url: (_b = variant === null || variant === void 0 ? void 0 : variant.image) === null || _b === void 0 ? void 0 : _b.src,
                },
            ],
        });
    };
    var trackProductViewed = function (product) {
        var _a, _b;
        var variant = product.variants.edges[0].node;
        sendDataToGTM({
            event: 'view_item',
            ecommerce: [
                {
                    item_name: product === null || product === void 0 ? void 0 : product.title,
                    item_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    item_variant_id: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                    item_sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                    item_url: window.location.href,
                    image_url: (_a = variant === null || variant === void 0 ? void 0 : variant.image) === null || _a === void 0 ? void 0 : _a.url,
                    price: (_b = variant === null || variant === void 0 ? void 0 : variant.price) === null || _b === void 0 ? void 0 : _b.amount,
                    currency: 'USD',
                    url: window.location.href,
                },
            ],
        });
    };
    var trackProductsSearched = function (query) {
        sendDataToGTM({
            event: 'products_search',
            query: query,
        });
    };
    var trackProductClicked = function (product) {
        var _a, _b, _c, _d, _e;
        var variant = product.variants.edges[0].node;
        sendDataToGTM({
            event: 'product_clicked',
            ecommerce: [
                {
                    product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    sku: (_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.edges[0]) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.sku,
                    category: product === null || product === void 0 ? void 0 : product.productType,
                    name: product === null || product === void 0 ? void 0 : product.title,
                    brand: product === null || product === void 0 ? void 0 : product.vendor,
                    price: (_d = variant === null || variant === void 0 ? void 0 : variant.price) === null || _d === void 0 ? void 0 : _d.amount,
                    variant: convertGidToId(variant === null || variant === void 0 ? void 0 : variant.id),
                    quantity: 1,
                    url: "/products/".concat(product === null || product === void 0 ? void 0 : product.handle),
                    image_url: (_e = variant === null || variant === void 0 ? void 0 : variant.image) === null || _e === void 0 ? void 0 : _e.url,
                },
            ],
        });
    };
    var trackProductList = function (collection) {
        if (collection) {
            var products = collection.products.edges.map(function (line) {
                var _a, _b, _c;
                var product = line === null || line === void 0 ? void 0 : line.node;
                var variant = (_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.edges[0].node;
                return {
                    product_id: convertGidToId(product === null || product === void 0 ? void 0 : product.id),
                    sku: variant === null || variant === void 0 ? void 0 : variant.sku,
                    name: product === null || product === void 0 ? void 0 : product.title,
                    price: (_b = variant === null || variant === void 0 ? void 0 : variant.price) === null || _b === void 0 ? void 0 : _b.amount,
                    category: product === null || product === void 0 ? void 0 : product.productType,
                    url: window.location.href,
                    image_url: (_c = variant === null || variant === void 0 ? void 0 : variant.image) === null || _c === void 0 ? void 0 : _c.url,
                };
            });
            sendDataToGTM({
                event: 'product_list_viewed',
                ecommerce: [
                    {
                        list_id: collection === null || collection === void 0 ? void 0 : collection.id,
                        userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,
                        products: products,
                    },
                ],
            });
        }
    };
    return {
        sendDataToGTM: sendDataToGTM,
        identify: identify,
        trackProductAdded: trackProductAdded,
        trackRemoveFromCart: trackRemoveFromCart,
        trackCartViewed: trackCartViewed,
        trackProductViewed: trackProductViewed,
        trackProductRemoved: trackProductRemoved,
        trackProductList: trackProductList,
        trackProductClicked: trackProductClicked,
        trackProductsSearched: trackProductsSearched,
        trackCheckoutStarted: trackCheckoutStarted,
    };
};
exports.default = useGTM;

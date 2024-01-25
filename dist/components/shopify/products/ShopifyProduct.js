"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_shopify_1 = require("frontend-shopify");
var frontend_shopify_2 = require("frontend-shopify");
var ShopifyProduct = function (props) {
    var handle = props.handle, initialProduct = props.product, children = props.children;
    var _a = (0, frontend_shopify_2.useProducts)(), product = _a.product, fetchProduct = _a.fetchProduct;
    var setProduct = (0, react_1.useContext)(frontend_shopify_1.ProductContext).setProduct;
    (0, react_1.useEffect)(function () {
        if (handle) {
            fetchProduct(handle);
        }
    }, [handle]);
    (0, react_1.useEffect)(function () {
        if (initialProduct) {
            setProduct(initialProduct);
        }
    }, [initialProduct]);
    (0, react_1.useEffect)(function () {
        if (product) {
            setProduct(product);
        }
    }, [product]);
    return children;
};
exports.default = ShopifyProduct;

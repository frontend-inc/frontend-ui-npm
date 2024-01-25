"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var frontend_shopify_1 = require("frontend-shopify");
var TrackRecentlyViewed = function (props) {
    var product = props.product;
    var viewProduct = (0, frontend_shopify_1.useRecentlyViewed)().viewProduct;
    (0, react_1.useEffect)(function () {
        if (product === null || product === void 0 ? void 0 : product.handle) {
            viewProduct(product);
        }
    }, [product === null || product === void 0 ? void 0 : product.handle]);
    return null;
};
exports.default = TrackRecentlyViewed;

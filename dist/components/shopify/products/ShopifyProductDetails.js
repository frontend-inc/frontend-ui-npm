"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("..");
var frontend_shopify_1 = require("frontend-shopify");
var ShopifyProductDetails = function (props) {
    var product = props.shopifyProduct, buttonText = props.buttonText, metafields = props.metafields, _a = props.enableQuantity, enableQuantity = _a === void 0 ? true : _a, _b = props.enableSubscription, enableSubscription = _b === void 0 ? true : _b, enableFavorites = props.enableFavorites, enableOkendoStarRating = props.enableOkendoStarRating;
    var _c = (0, frontend_shopify_1.useProductDetails)({
        product: product,
    }), price = _c.price, compareAtPrice = _c.compareAtPrice, variant = _c.variant, selectedOptions = _c.selectedOptions, handleOptionChange = _c.handleOptionChange, image = _c.image, images = _c.images, handleImageClick = _c.handleImageClick;
    return (react_1.default.createElement(material_1.Stack, { spacing: 0, direction: "row", sx: sx.container },
        react_1.default.createElement(material_1.Box, { sx: sx.left },
            react_1.default.createElement(__1.ShopifyProductImages, { product: product, image: image, images: images, handleClick: handleImageClick })),
        react_1.default.createElement(material_1.Box, { sx: sx.right },
            react_1.default.createElement(material_1.Stack, { spacing: 2 },
                react_1.default.createElement(__1.ShopifyProductInfo, { product: product, price: price, compareAtPrice: compareAtPrice, enableOkendoStarRating: enableOkendoStarRating }),
                react_1.default.createElement(__1.ShopifyProductVariantSelector, { product: product, selectedOptions: selectedOptions, handleOptionChange: handleOptionChange }),
                react_1.default.createElement(__1.ShopifyAddToCartButton, { product: product, variant: variant, enableQuantity: enableQuantity, enableSubscription: enableSubscription, enableFavorites: enableFavorites, label: buttonText }),
                metafields && (react_1.default.createElement(__1.ShopifyProductMetafields, { product: product, metafields: metafields })),
                react_1.default.createElement(__1.ShopifyTrackRecentlyViewed, { product: product })))));
};
exports.default = ShopifyProductDetails;
var sx = {
    container: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
    },
    left: {
        p: {
            sm: 1,
            xs: 0,
        },
        width: {
            xs: '100%',
            sm: '50%',
        },
    },
    right: {
        p: {
            sm: 1,
            xs: 0,
        },
        width: {
            xs: '100%',
            sm: '50%',
        },
    },
    root: {
        px: 0,
    },
    buttons: {
        alignItems: 'flex-end',
    },
};

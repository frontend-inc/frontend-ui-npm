"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var shopify_1 = require("../../../components/shopify");
var frontend_shopify_1 = require("frontend-shopify");
var ProductDetailPage = function (props) {
    var product = props.shopifyProduct, buttonText = props.buttonText, metafields = props.metafields, _a = props.enableQuantity, enableQuantity = _a === void 0 ? true : _a, _b = props.enableSubscription, enableSubscription = _b === void 0 ? true : _b, enableFavorites = props.enableFavorites, enableOkendoStarRating = props.enableOkendoStarRating;
    var _c = (0, frontend_shopify_1.useProductDetails)({
        product: product,
    }), price = _c.price, compareAtPrice = _c.compareAtPrice, variant = _c.variant, selectedOptions = _c.selectedOptions, handleOptionChange = _c.handleOptionChange, image = _c.image, images = _c.images, handleImageClick = _c.handleImageClick;
    /*
    useEffect(() => {
        if (handle) {
            findProduct(String(handle), metafields)
        }
    }, [handle]) */
    return (react_1.default.createElement(material_1.Stack, { spacing: 0, direction: "row", sx: sx.container },
        react_1.default.createElement(material_1.Box, { sx: sx.left },
            react_1.default.createElement(shopify_1.ProductImages, { product: product, image: image, images: images, handleClick: handleImageClick })),
        react_1.default.createElement(material_1.Box, { sx: sx.right },
            react_1.default.createElement(material_1.Stack, { spacing: 2 },
                react_1.default.createElement(shopify_1.ProductInfo, { product: product, price: price, compareAtPrice: compareAtPrice, enableOkendoStarRating: enableOkendoStarRating }),
                react_1.default.createElement(shopify_1.ProductVariantSelector, { product: product, selectedOptions: selectedOptions, handleOptionChange: handleOptionChange }),
                react_1.default.createElement(shopify_1.AddToCartButton, { product: product, variant: variant, enableQuantity: enableQuantity, enableSubscription: enableSubscription, enableFavorites: enableFavorites, label: buttonText }),
                metafields && (react_1.default.createElement(shopify_1.ProductMetafields, { product: product, metafields: metafields })),
                react_1.default.createElement(shopify_1.TrackRecentlyViewed, { product: product })))));
};
exports.default = ProductDetailPage;
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
    actions: {
        alignItems: 'flex-end',
    },
};

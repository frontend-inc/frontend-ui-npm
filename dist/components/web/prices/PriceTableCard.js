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
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var context_1 = require("../../../context");
var frontend_shopify_1 = require("frontend-shopify");
var PriceCard = function (props) {
    var _a;
    var router = (0, router_1.useRouter)();
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var price = props.price;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var handleClick = function () {
        if (!currentUser) {
            setAuthOpen(true);
            return;
        }
        if (!price.url)
            return;
        switch (price === null || price === void 0 ? void 0 : price.price_type) {
            case 'stripe_payment_link':
                var url = "".concat(price.stripe_payment_url, "?client_reference_id=").concat(currentUser.id, "&email=").concat(currentUser.email);
                window.open(url, '_blank');
                break;
            case 'url':
                router.push(price.url);
                break;
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            (price === null || price === void 0 ? void 0 : price.label) && (react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(__1.Label, { label: price.label }))),
            react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary" }, price.title),
            react_1.default.createElement(material_1.Typography, { variant: "h5", color: "text.primary" },
                (0, frontend_shopify_1.formatCurrency)(price.price, 0),
                (price.recurring && price.recurring_rate) && ("/".concat(price.recurring_rate))),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement(material_1.List, { disablePadding: true }, (_a = price === null || price === void 0 ? void 0 : price.features) === null || _a === void 0 ? void 0 : _a.map(function (feature, i) { return (react_1.default.createElement(material_1.ListItem, { key: i },
                react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary" }, feature === null || feature === void 0 ? void 0 : feature.label) }))); }))),
        react_1.default.createElement(material_1.Button, { onClick: handleClick, variant: "contained", color: "primary", fullWidth: true }, price.buttonText)));
};
exports.default = PriceCard;
var sx = {
    root: {
        width: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        minHeight: 300,
    },
    features: {
        whiteSpace: 'pre-line',
        color: 'text.primary',
        mb: 0,
    },
};

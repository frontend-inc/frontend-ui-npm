"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_OPTIONS = void 0;
var DEFAULT_NOTIFICATION_OPTIONS = [
    { value: 'text', label: 'Text', icon: 'CircleAlert' },
    { value: 'page', label: 'Page', icon: 'StickyNote' },
    { value: 'url', label: 'URL', icon: 'ExternalLink' },
    { value: 'document', label: 'Document', icon: 'Database' },
];
exports.NOTIFICATION_OPTIONS = {
    default: DEFAULT_NOTIFICATION_OPTIONS,
    shopify: __spreadArray(__spreadArray([], DEFAULT_NOTIFICATION_OPTIONS, true), [
        {
            value: 'shopify_collection',
            label: 'Shopify Collection',
            icon: 'ShoppingCart',
        },
        { value: 'shopify_product', label: 'Shopify Product', icon: 'TShirt' },
    ], false),
};

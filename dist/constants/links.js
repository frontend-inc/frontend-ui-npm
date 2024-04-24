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
exports.SOCIAL_LINK_PROVIDERS = exports.LINK_OPTIONS = void 0;
var DEFAULT_LINK_OPTIONS = [
    //{ value: 'dropdown', label: 'Dropdown', icon: 'Folder' },
    { value: 'page', label: 'Page', icon: 'StickyNote' },
    { value: 'url', label: 'URL', icon: 'ExternalLink' },
    { value: 'document', label: 'Document', icon: 'Database' },
];
exports.LINK_OPTIONS = {
    default: DEFAULT_LINK_OPTIONS,
    shopify: __spreadArray(__spreadArray([], DEFAULT_LINK_OPTIONS, true), [
        {
            value: 'shopify_collection',
            label: 'Collection',
            icon: 'ShoppingCart',
        },
        { value: 'shopify_product', label: 'Product', icon: 'Shirt' },
    ], false),
};
exports.SOCIAL_LINK_PROVIDERS = [
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Linkedin', label: 'LinkedIn' },
    { value: 'YouTube', label: 'YouTube' },
    { value: 'TikTok', label: 'TikTok' },
];

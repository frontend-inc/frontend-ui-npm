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
exports.COLLECTION_TEMPLATES = exports.COLLECTION_PRODUCT = exports.COLLECTION_EVENT = exports.COLLECTION_COMPANY = exports.COLLECTION_PERSON = exports.COLLECTION_ARTICLE = exports.COLLECTION_ITEM = void 0;
var fields = __importStar(require("../../constants/templates/field-templates"));
var COLORS = __importStar(require("@mui/material/colors"));
exports.COLLECTION_ITEM = {
    icon: 'Box',
    name: 'items',
    label: 'Blank',
    color: COLORS.deepPurple[500],
    description: 'An basic item',
    fields: __spreadArray([], fields.BASE_FIELD_TEMPLATES, true),
    data: [],
};
exports.COLLECTION_ARTICLE = {
    icon: 'FileText',
    name: 'articles',
    label: 'Article',
    color: COLORS.orange[500],
    description: 'A blog post or article',
    fields: __spreadArray(__spreadArray([], fields.BASE_FIELD_TEMPLATES, true), [
        fields.PUBLISHED_AT_FIELD_TEMPLATE,
        fields.TOPICS_FIELD_TEMPLATE,
    ], false),
};
exports.COLLECTION_PERSON = {
    icon: 'User',
    name: 'people',
    label: 'Person',
    color: COLORS.pink[500],
    description: 'A person',
    fields: [
        fields.HANDLE_FIELD_TEMPLATE,
        fields.IMAGE_FIELD_TEMPLATE,
        fields.LABEL_FIELD_TEMPLATE,
        fields.FULL_NAME_FIELD_TEMPLATE,
        fields.BIO_FIELD_TEMPLATE,
        fields.TAGS_FIELD_TEMPLATE,
    ],
};
exports.COLLECTION_COMPANY = {
    icon: 'Building2',
    name: 'companies',
    label: 'Company',
    color: COLORS.blue[500],
    description: 'A company',
    fields: [
        fields.HANDLE_FIELD_TEMPLATE,
        fields.IMAGE_FIELD_TEMPLATE,
        fields.LABEL_FIELD_TEMPLATE,
        fields.COMPANY_FIELD_TEMPLATE,
        fields.DESCRIPTION_FIELD_TEMPLATE,
        fields.TAGS_FIELD_TEMPLATE,
    ],
};
exports.COLLECTION_EVENT = {
    icon: 'Calendar',
    name: 'events',
    label: 'Event',
    color: COLORS.amber[500],
    description: 'An event with dates',
    fields: __spreadArray(__spreadArray([], fields.BASE_FIELD_TEMPLATES, true), [
        fields.START_DATE_FIELD_TEMPLATE,
        fields.END_DATE_FIELD_TEMPLATE,
        fields.DURATION_MINUTES_FIELD_TEMPLATE,
    ], false),
};
exports.COLLECTION_PRODUCT = {
    icon: 'ShoppingBag',
    name: 'products',
    label: 'Product',
    color: COLORS.lightGreen[500],
    description: 'A product for sale',
    fields: __spreadArray(__spreadArray([], fields.BASE_FIELD_TEMPLATES, true), [
        fields.PRICE_FIELD_TEMPLATE,
        fields.COMPARE_AT_PRICE_FIELD_TEMPLATE,
    ], false),
};
exports.COLLECTION_TEMPLATES = [
    exports.COLLECTION_ITEM,
    exports.COLLECTION_ARTICLE,
    exports.COLLECTION_PERSON,
    exports.COLLECTION_COMPANY,
    exports.COLLECTION_EVENT,
    exports.COLLECTION_PRODUCT,
];

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
exports.FIELD_VARIANTS = exports.SHOPIFY_PRODUCTS_FIELD_VARIANT = exports.HABTM_FIELD_VARIANT = exports.FILE_FIELD_VARIANT = exports.VIDEO_FIELD_VARIANT = exports.TEXT_FIELD_VARIANT = exports.SHOPIFY_FIELD_VARIANT = exports.STRING_FIELD_VARIANT = exports.RATING_FIELD_VARIANT = exports.NUMBER_FIELD_VARIANT = exports.LOCATION_FIELD_VARIANT = exports.PRICE_FIELD_VARIANT = exports.IMAGE_FIELD_VARIANT = exports.JSON_FIELD_VARIANT = exports.FLOAT_FIELD_VARIANT = exports.SELECT_FIELD_VARIANT = exports.DATETIME_FIELD_VARIANT = exports.DATE_FIELD_VARIANT = exports.BOOLEAN_FIELD_VARIANT = exports.TAG_ARRAY_FIELD_VARIANT = exports.URL_FIELD_VARIANT = exports.PHONE_FIELD_VARIANT = exports.EMAIL_FIELD_VARIANT = exports.AUDIO_FIELD_VARIANT = void 0;
var COLORS = __importStar(require("@mui/material/colors"));
exports.AUDIO_FIELD_VARIANT = {
    icon: 'Headphones',
    category: 'Media',
    variant: 'audio',
    db_type: 'string',
    label: 'Audio',
    description: 'Audio URL',
    array: false,
    color: COLORS.pink[600],
};
exports.EMAIL_FIELD_VARIANT = {
    icon: 'Mail',
    category: 'Text',
    variant: 'email',
    db_type: 'string',
    label: 'Email',
    description: 'Email address',
    array: false,
    color: COLORS.green[600],
};
exports.PHONE_FIELD_VARIANT = {
    icon: 'Phone',
    category: 'Text',
    variant: 'phone',
    db_type: 'string',
    label: 'Phone',
    description: 'Phone number',
    array: false,
    color: COLORS.green[600],
};
exports.URL_FIELD_VARIANT = {
    icon: 'Link',
    category: 'Text',
    variant: 'url',
    db_type: 'string',
    label: 'URL',
    description: 'Website URL',
    array: false,
    color: COLORS.green[600],
};
exports.TAG_ARRAY_FIELD_VARIANT = {
    icon: 'List',
    category: 'Text',
    variant: 'array',
    label: 'Tags',
    db_type: 'string',
    description: 'Multiple keywords',
    array: true,
    color: COLORS.deepPurple[500],
};
exports.BOOLEAN_FIELD_VARIANT = {
    icon: 'ToggleLeft',
    category: 'Boolean',
    variant: 'boolean',
    db_type: 'boolean',
    label: 'Switch',
    description: 'True or false switch',
    array: false,
    color: COLORS.lightBlue[500],
};
exports.DATE_FIELD_VARIANT = {
    icon: 'Calendar',
    category: 'Date',
    variant: 'date',
    db_type: 'datetime',
    label: 'Date',
    description: 'Calendar date',
    array: false,
    color: COLORS.amber[600],
};
exports.DATETIME_FIELD_VARIANT = {
    icon: 'Clock',
    category: 'Date',
    variant: 'datetime',
    db_type: 'datetime',
    label: 'DateTime',
    description: 'Date and time',
    array: false,
    color: COLORS.amber[600],
};
exports.SELECT_FIELD_VARIANT = {
    icon: 'ChevronDownSquare',
    category: 'Text',
    variant: 'select',
    label: 'Select',
    db_type: 'string',
    description: 'Select menu of choices',
    array: false,
    color: COLORS.deepPurple[500],
};
exports.FLOAT_FIELD_VARIANT = {
    icon: 'Hash',
    category: 'Numbers',
    variant: 'float',
    db_type: 'float',
    label: 'Float',
    description: 'Numbers with decimals',
    array: false,
    color: COLORS.purple[500],
};
exports.JSON_FIELD_VARIANT = {
    icon: 'FileJson',
    category: 'Data',
    variant: 'json',
    db_type: 'jsonb',
    label: 'JSON',
    description: 'JSON field',
    array: false,
    color: COLORS.blue[500],
};
exports.IMAGE_FIELD_VARIANT = {
    icon: 'Image',
    category: 'Media',
    variant: 'image',
    db_type: 'string',
    label: 'Image',
    description: 'Image URL',
    array: false,
    color: COLORS.pink[500],
};
exports.PRICE_FIELD_VARIANT = {
    icon: 'DollarSign',
    category: 'Numbers',
    variant: 'price',
    db_type: 'float',
    label: 'Price',
    description: 'Currency in USD',
    array: false,
    color: COLORS.purple[500],
};
exports.LOCATION_FIELD_VARIANT = {
    icon: 'MapPin',
    category: 'Geographic',
    variant: 'location',
    db_type: 'string',
    label: 'Location',
    description: 'Address with coordinates',
    array: false,
    color: COLORS.teal[500],
};
exports.NUMBER_FIELD_VARIANT = {
    icon: 'Hash',
    category: 'Numbers',
    variant: 'number',
    db_type: 'integer',
    label: 'Number',
    description: 'Integer values.',
    array: false,
    color: COLORS.purple[500],
};
exports.RATING_FIELD_VARIANT = {
    icon: 'Star',
    category: 'Numbers',
    variant: 'rating',
    db_type: 'integer',
    label: 'Rating',
    description: 'Five-star ratings',
    array: false,
    color: COLORS.purple[500],
};
exports.STRING_FIELD_VARIANT = {
    icon: 'Type',
    category: 'Text',
    variant: 'string',
    db_type: 'string',
    label: 'Short text',
    description: 'Single line of text',
    array: false,
    color: COLORS.deepPurple[500],
};
exports.SHOPIFY_FIELD_VARIANT = {
    icon: 'ShoppingCart',
    category: 'Shopify',
    variant: 'shopify',
    db_type: 'string',
    label: 'Shopify product',
    description: 'Shopify product handle',
    array: false,
    color: COLORS.lightGreen[500],
};
exports.TEXT_FIELD_VARIANT = {
    icon: 'FileText',
    category: 'Text',
    variant: 'text',
    db_type: 'text',
    label: 'Long text',
    description: 'Paragraph of text',
    array: false,
    color: COLORS.deepPurple[500],
};
exports.VIDEO_FIELD_VARIANT = {
    icon: 'Video',
    category: 'Media',
    variant: 'video',
    label: 'Video',
    db_type: 'string',
    description: 'Video URL',
    array: false,
    color: COLORS.pink[500],
};
exports.FILE_FIELD_VARIANT = {
    icon: 'File',
    category: 'Media',
    variant: 'file',
    label: 'File',
    db_type: 'text',
    description: 'Upload an attachment',
    array: false,
    color: COLORS.pink[500],
};
exports.HABTM_FIELD_VARIANT = {
    icon: 'Repeat',
    category: 'Reference',
    db_type: 'habtm',
    variant: 'habtm',
    label: 'Reference',
    description: 'Connect one or more items',
    array: false,
    color: COLORS.orange[500],
};
exports.SHOPIFY_PRODUCTS_FIELD_VARIANT = {
    icon: 'Shirt',
    category: 'Shopify',
    variant: 'shopify_products',
    label: 'Shopify Products',
    db_type: 'string',
    description: 'Shopify Products',
    array: true,
    color: COLORS.pink[500],
};
exports.FIELD_VARIANTS = [
    exports.STRING_FIELD_VARIANT,
    exports.TEXT_FIELD_VARIANT,
    exports.SELECT_FIELD_VARIANT,
    exports.TAG_ARRAY_FIELD_VARIANT,
    exports.EMAIL_FIELD_VARIANT,
    exports.PHONE_FIELD_VARIANT,
    exports.URL_FIELD_VARIANT,
    exports.BOOLEAN_FIELD_VARIANT,
    exports.DATE_FIELD_VARIANT,
    exports.DATETIME_FIELD_VARIANT,
    exports.FLOAT_FIELD_VARIANT,
    exports.NUMBER_FIELD_VARIANT,
    exports.LOCATION_FIELD_VARIANT,
    exports.RATING_FIELD_VARIANT,
    exports.PRICE_FIELD_VARIANT,
    exports.SHOPIFY_FIELD_VARIANT,
    // Media fields
    exports.IMAGE_FIELD_VARIANT,
    exports.VIDEO_FIELD_VARIANT,
    exports.FILE_FIELD_VARIANT,
    exports.HABTM_FIELD_VARIANT,
    exports.SHOPIFY_PRODUCTS_FIELD_VARIANT,
];

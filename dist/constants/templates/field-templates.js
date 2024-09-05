"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_FIELD_TEMPLATES = exports.SHOPIFY_COLLECTION_FIELD_TEMPLATE = exports.SHOPIFY_PRODUCT_FIELD_TEMPLATE = exports.ZIPCODE_FIELD_TEMPLATE = exports.COUNTRY_FIELD_TEMPLATE = exports.STATE_FIELD_TEMPLATE = exports.CITY_FIELD_TEMPLATE = exports.ADDRESS2_FIELD_TEMPLATE = exports.ADDRESS1_FIELD_TEMPLATE = exports.VIDEO_FIELD_TEMPLATE = exports.COMPARE_AT_PRICE_FIELD_TEMPLATE = exports.PRICE_FIELD_TEMPLATE = exports.DURATION_SECONDS_FIELD_TEMPLATE = exports.DURATION_MINUTES_FIELD_TEMPLATE = exports.END_DATE_FIELD_TEMPLATE = exports.START_DATE_FIELD_TEMPLATE = exports.TOPICS_FIELD_TEMPLATE = exports.TAGS_FIELD_TEMPLATE = exports.PUBLISHED_AT_FIELD_TEMPLATE = exports.FILE_FIELD_TEMPLATE = exports.IMAGE_FIELD_TEMPLATE = exports.DESCRIPTION_FIELD_TEMPLATE = exports.BIO_FIELD_TEMPLATE = exports.STATUS_FIELD_TEMPLATE = exports.CAPTION_FIELD_TEMPLATE = exports.COMPANY_FIELD_TEMPLATE = exports.FULL_NAME_FIELD_TEMPLATE = exports.SUBTITLE_FIELD_TEMPLATE = exports.TITLE_FIELD_TEMPLATE = exports.LABEL_FIELD_TEMPLATE = exports.HANDLE_FIELD_TEMPLATE = exports.BASE_FIELD_TEMPLATE = void 0;
exports.BASE_FIELD_TEMPLATE = {
    internal: true,
    editable: true,
    visible: true,
    options: [],
    array: false,
    filterable: true,
    sortable: true,
    table_header: true,
    display_FIELD_TEMPLATE: false,
    form_FIELD_TEMPLATE: true,
};
exports.HANDLE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: true, name: 'handle', label: 'Handle', db_type: 'string', variant: 'string', filterable: true, sortable: true, table_header: true, display_FIELD_TEMPLATE: false, form_FIELD_TEMPLATE: false });
exports.LABEL_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'label', label: 'Label', db_type: 'string', variant: 'string' });
exports.TITLE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'title', label: 'Title', db_type: 'string', variant: 'string' });
exports.SUBTITLE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'subtitle', label: 'Subtitle', db_type: 'string', variant: 'string', filterable: true, sortable: true, table_header: true, display_FIELD_TEMPLATE: true, form_FIELD_TEMPLATE: true });
exports.FULL_NAME_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'title', label: 'Full name', db_type: 'string', variant: 'string' });
exports.COMPANY_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'title', label: 'Company', db_type: 'string', variant: 'string' });
exports.CAPTION_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'label', label: 'Caption', db_type: 'string', variant: 'string' });
exports.STATUS_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'status', label: 'Status', db_type: 'string', variant: 'string' });
exports.BIO_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'description', label: 'About', db_type: 'text', variant: 'text', display_FIELD_TEMPLATE: true });
exports.DESCRIPTION_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'description', label: 'Description', db_type: 'text', variant: 'text', display_FIELD_TEMPLATE: true });
exports.IMAGE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'image', label: 'Image', db_type: 'string', variant: 'image', filterable: false, sortable: false, table_header: true, display_FIELD_TEMPLATE: false, form_FIELD_TEMPLATE: false });
exports.FILE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'file', label: 'File', db_type: 'string', variant: 'file', filterable: false, sortable: false, table_header: true, display_FIELD_TEMPLATE: false, form_FIELD_TEMPLATE: false });
exports.PUBLISHED_AT_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { name: 'published_at', label: 'Published At', db_type: 'datetime', variant: 'datetime' });
exports.TAGS_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: true, name: 'tags', label: 'Tags', db_type: 'string', variant: 'array', array: true });
exports.TOPICS_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'topics', label: 'Topics', db_type: 'string', variant: 'array', array: true });
exports.START_DATE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'start_date', label: 'Start Date', db_type: 'datetime', variant: 'datetime' });
exports.END_DATE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'end_date', label: 'End Date', db_type: 'datetime', variant: 'datetime' });
exports.DURATION_MINUTES_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'num_minutes', label: 'Minutes', db_type: 'integer', variant: 'number' });
exports.DURATION_SECONDS_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'num_seconds', label: 'Seconds', db_type: 'integer', variant: 'number' });
exports.PRICE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'price', label: 'Price', db_type: 'float', variant: 'price' });
exports.COMPARE_AT_PRICE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'compare_at_price', label: 'Compare at price', db_type: 'float', variant: 'price' });
exports.VIDEO_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'video', label: 'Video', db_type: 'string', variant: 'video' });
exports.ADDRESS1_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'address1', label: 'Address Line 1', db_type: 'string', variant: 'string' });
exports.ADDRESS2_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'address2', label: 'Address Line 2', db_type: 'string', variant: 'string' });
exports.CITY_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'city', label: 'City', db_type: 'string', variant: 'string' });
exports.STATE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'state', label: 'State', db_type: 'string', variant: 'state' });
exports.COUNTRY_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'country', label: 'Country', db_type: 'string', variant: 'country' });
exports.ZIPCODE_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'zipcode', label: 'Zipcode', db_type: 'string', variant: 'string' });
exports.SHOPIFY_PRODUCT_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'shopify_handle', label: 'Shopify Product', db_type: 'string', variant: 'shopify_product', filterable: false, sortable: false, table_header: false, display_FIELD_TEMPLATE: false, form_FIELD_TEMPLATE: false });
exports.SHOPIFY_COLLECTION_FIELD_TEMPLATE = __assign(__assign({}, exports.BASE_FIELD_TEMPLATE), { internal: false, name: 'shopify_handle', label: 'Shopify List', db_type: 'string', variant: 'shopify_collection', filterable: false, sortable: false, table_header: false, display_FIELD_TEMPLATE: false, form_FIELD_TEMPLATE: false });
exports.BASE_FIELD_TEMPLATES = [
    exports.HANDLE_FIELD_TEMPLATE,
    exports.LABEL_FIELD_TEMPLATE,
    exports.TITLE_FIELD_TEMPLATE,
    exports.SUBTITLE_FIELD_TEMPLATE,
    exports.DESCRIPTION_FIELD_TEMPLATE,
    exports.IMAGE_FIELD_TEMPLATE,
    exports.TAGS_FIELD_TEMPLATE,
];

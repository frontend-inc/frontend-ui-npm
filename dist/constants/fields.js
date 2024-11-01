"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_FIELD = exports.TAGS_FIELD = exports.LOCALE_FIELD = exports.PUBLISHED_FIELD = exports.TITLE_FIELD = exports.HANDLE_FIELD = exports.ID_FIELD = exports.SYSTEM_FIELDS = exports.ATTACHMENT_FIELDS = exports.REFERENCE_FIELDS = void 0;
exports.REFERENCE_FIELDS = ['habtm'];
exports.ATTACHMENT_FIELDS = ['image', 'video', 'file'];
exports.SYSTEM_FIELDS = [
    'id',
    'title',
    'subtitle',
    'category',
    'description',
    'handle',
    'user_id',
    'team_id',
    'label',
    'published',
    'status',
    'locale',
    'location',
    'tags',
    'habtm',
    'image',
    'video',
    'audio',
    'attachment',
    'file',
    'lat',
    'lng',
    'youtube_video',
    'vimeo_video',
    'soundcloud_audio',
    'calendly_url',
    'shopify_product'
];
/* SYSTEM FIELDS */
exports.ID_FIELD = {
    label: 'ID',
    variant: 'number',
    db_type: 'integer',
    name: 'id',
    internal: true,
    position: 0,
    array: false,
    visible: true,
    editable: false,
    reference: false,
};
exports.HANDLE_FIELD = {
    label: 'Handle',
    variant: 'string',
    reference: false,
    db_type: 'string',
    name: 'handle',
    position: 1,
    array: false,
    internal: true,
    visible: true,
    editable: true,
};
exports.TITLE_FIELD = {
    label: 'Title',
    variant: 'string',
    reference: false,
    db_type: 'string',
    name: 'title',
    position: 2,
    array: false,
    internal: true,
    visible: true,
    editable: true,
};
exports.PUBLISHED_FIELD = {
    label: 'Published',
    variant: 'boolean',
    reference: false,
    db_type: 'boolean',
    name: 'published',
    position: 4,
    array: false,
    internal: true,
    visible: true,
    editable: true,
};
exports.LOCALE_FIELD = {
    label: 'locale',
    variant: 'string',
    reference: false,
    db_type: 'string',
    name: 'locale',
    position: 5,
    array: false,
    internal: true,
    visible: true,
    editable: true,
};
exports.TAGS_FIELD = {
    label: 'Tags',
    variant: 'array',
    reference: false,
    db_type: 'string',
    name: 'tags',
    position: 6,
    array: true,
    internal: true,
    editable: true,
    visible: false,
};
exports.USER_FIELD = {
    label: 'User',
    variant: 'user',
    db_type: 'belongs_to',
    name: 'user',
    internal: true,
    position: 7,
    array: false,
    visible: true,
    editable: false,
    reference: false,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIELD_VARIANTS = exports.SOUNDCLOUND_AUDIO_FIELD_VARIANT = exports.VIMEO_VIDEO_FIELD_VARIANT = exports.YOUTUBE_VIDEO_FIELD_VARIANT = exports.SHOPIFY_PRODUCT_FIELD_VARIANT = exports.FILE_FIELD_VARIANT = exports.VIDEO_FIELD_VARIANT = exports.TEXT_FIELD_VARIANT = exports.STRING_FIELD_VARIANT = exports.RATING_FIELD_VARIANT = exports.NUMBER_FIELD_VARIANT = exports.LOCATION_FIELD_VARIANT = exports.PRICE_FIELD_VARIANT = exports.IMAGE_FIELD_VARIANT = exports.JSON_FIELD_VARIANT = exports.FLOAT_FIELD_VARIANT = exports.SELECT_FIELD_VARIANT = exports.DATETIME_FIELD_VARIANT = exports.DATE_FIELD_VARIANT = exports.BOOLEAN_FIELD_VARIANT = exports.TAG_ARRAY_FIELD_VARIANT = exports.URL_FIELD_VARIANT = exports.PHONE_FIELD_VARIANT = exports.EMAIL_FIELD_VARIANT = exports.AUDIO_FIELD_VARIANT = void 0;
exports.AUDIO_FIELD_VARIANT = {
    icon: 'ri-headphone-fill',
    category: 'Media',
    variant: 'audio',
    db_type: 'string',
    label: 'Audio',
    description: 'Audio URL',
    array: false,
    color: 'bg-pink-500',
};
exports.EMAIL_FIELD_VARIANT = {
    icon: 'ri-mail-fill',
    category: 'Text',
    variant: 'email',
    db_type: 'string',
    label: 'Email',
    description: 'Email address',
    array: false,
    color: 'bg-green-500',
};
exports.PHONE_FIELD_VARIANT = {
    icon: 'ri-phone-fill',
    category: 'Text',
    variant: 'phone',
    db_type: 'string',
    label: 'Phone',
    description: 'Phone number',
    array: false,
    color: 'bg-green-500',
};
exports.URL_FIELD_VARIANT = {
    icon: 'ri-link-m',
    category: 'Text',
    variant: 'url',
    db_type: 'string',
    label: 'URL',
    description: 'Website URL',
    array: false,
    color: 'bg-green-500',
};
exports.TAG_ARRAY_FIELD_VARIANT = {
    icon: 'ri-list-unordered',
    category: 'Text',
    variant: 'array',
    label: 'Tags',
    db_type: 'string',
    description: 'Multiple keywords',
    array: true,
    color: 'bg-purple-500',
};
exports.BOOLEAN_FIELD_VARIANT = {
    icon: 'ri-toggle-fill',
    category: 'Boolean',
    variant: 'boolean',
    db_type: 'boolean',
    label: 'Switch',
    description: 'True or false switch',
    array: false,
    color: 'bg-sky-500',
};
exports.DATE_FIELD_VARIANT = {
    icon: 'ri-calendar-fill',
    category: 'Date',
    variant: 'date',
    db_type: 'datetime',
    label: 'Date',
    description: 'Calendar date',
    array: false,
    color: 'bg-amber-500',
};
exports.DATETIME_FIELD_VARIANT = {
    icon: 'ri-time-fill',
    category: 'Date',
    variant: 'datetime',
    db_type: 'datetime',
    label: 'DateTime',
    description: 'Date and time',
    array: false,
    color: 'bg-amber-500',
};
exports.SELECT_FIELD_VARIANT = {
    icon: 'ri-arrow-down-s-fill',
    category: 'Text',
    variant: 'select',
    label: 'Select',
    db_type: 'string',
    description: 'Select menu of choices',
    array: false,
    color: 'bg-purple-500',
};
exports.FLOAT_FIELD_VARIANT = {
    icon: 'ri-hashtag',
    category: 'Numbers',
    variant: 'float',
    db_type: 'float',
    label: 'Float',
    description: 'Numbers with decimals',
    array: false,
    color: 'bg-purple-500',
};
exports.JSON_FIELD_VARIANT = {
    icon: 'ri-code-s-slash-fill',
    category: 'Data',
    variant: 'json',
    db_type: 'jsonb',
    label: 'JSON',
    description: 'JSON field',
    array: false,
    color: 'bg-blue-500',
};
exports.IMAGE_FIELD_VARIANT = {
    icon: 'ri-image-fill',
    category: 'Media',
    variant: 'image',
    db_type: 'string',
    label: 'Image',
    description: 'Image URL',
    array: false,
    color: 'bg-pink-500',
};
exports.PRICE_FIELD_VARIANT = {
    icon: 'ri-money-dollar-box-fill',
    category: 'Numbers',
    variant: 'price',
    db_type: 'float',
    label: 'Price',
    description: 'Currency in USD',
    array: false,
    color: 'bg-purple-500',
};
exports.LOCATION_FIELD_VARIANT = {
    icon: 'ri-map-pin-fill',
    category: 'Geographic',
    variant: 'location',
    db_type: 'string',
    label: 'Location',
    description: 'Address with coordinates',
    array: false,
    color: 'bg-teal-500',
};
exports.NUMBER_FIELD_VARIANT = {
    icon: 'ri-hashtag',
    category: 'Numbers',
    variant: 'number',
    db_type: 'integer',
    label: 'Number',
    description: 'Integer values.',
    array: false,
    color: 'bg-purple-500',
};
exports.RATING_FIELD_VARIANT = {
    icon: 'ri-star-fill',
    category: 'Numbers',
    variant: 'rating',
    db_type: 'integer',
    label: 'Rating',
    description: 'Five-star ratings',
    array: false,
    color: 'bg-purple-500',
};
exports.STRING_FIELD_VARIANT = {
    icon: 'ri-text',
    category: 'Text',
    variant: 'string',
    db_type: 'string',
    label: 'Short text',
    description: 'Single line of text',
    array: false,
    color: 'bg-purple-500',
};
exports.TEXT_FIELD_VARIANT = {
    icon: 'ri-file-text-fill',
    category: 'Text',
    variant: 'text',
    db_type: 'text',
    label: 'Long text',
    description: 'Paragraph of text',
    array: false,
    color: 'bg-purple-500',
};
exports.VIDEO_FIELD_VARIANT = {
    icon: 'ri-video-fill',
    category: 'Media',
    variant: 'video',
    label: 'Video',
    db_type: 'string',
    description: 'Video URL',
    array: false,
    color: 'bg-pink-500',
};
exports.FILE_FIELD_VARIANT = {
    icon: 'ri-file-fill',
    category: 'Media',
    variant: 'file',
    label: 'File',
    db_type: 'text',
    description: 'Upload an attachment',
    array: false,
    color: 'bg-pink-500',
};
exports.SHOPIFY_PRODUCT_FIELD_VARIANT = {
    icon: 'ri-t-shirt-fill',
    category: 'Shopify',
    variant: 'shopify_product',
    label: 'Shopify Product',
    db_type: 'string',
    description: 'Shopify Product',
    array: true,
    color: 'bg-lime-500',
};
exports.YOUTUBE_VIDEO_FIELD_VARIANT = {
    icon: 'ri-youtube-fill',
    category: 'Addon',
    variant: 'youtube_video',
    label: 'YouTube Video',
    db_type: 'string',
    description: 'YouTube Video',
    array: true,
    color: 'bg-pink-500',
};
exports.VIMEO_VIDEO_FIELD_VARIANT = {
    icon: 'ri-play-circle-fill',
    category: 'Addon',
    variant: 'vimeo_video',
    label: 'Vimeo Video',
    db_type: 'string',
    description: 'Vimeo Video',
    array: true,
    color: 'bg-pink-500',
};
exports.SOUNDCLOUND_AUDIO_FIELD_VARIANT = {
    icon: 'ri-sound-module-fill',
    category: 'Addon',
    variant: 'soundcloud_audio',
    label: 'Soundcloud Audio',
    db_type: 'string',
    description: 'Soundcloud Audio',
    array: true,
    color: 'bg-pink-500',
};
exports.FIELD_VARIANTS = [
    exports.STRING_FIELD_VARIANT,
    exports.TEXT_FIELD_VARIANT,
    exports.SELECT_FIELD_VARIANT,
    exports.TAG_ARRAY_FIELD_VARIANT,
    exports.URL_FIELD_VARIANT,
    exports.BOOLEAN_FIELD_VARIANT,
    exports.DATE_FIELD_VARIANT,
    exports.DATETIME_FIELD_VARIANT,
    exports.FLOAT_FIELD_VARIANT,
    exports.NUMBER_FIELD_VARIANT,
    exports.RATING_FIELD_VARIANT,
    exports.PRICE_FIELD_VARIANT,
];

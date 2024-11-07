"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCUMENT_SHOW_FIELDS = exports.DOCUMENT_FORM_FIELDS = exports.SOUNDCLOUD_AUDIO = exports.VIMEO_VIDEO = exports.YOUTUBE_VIDEO = exports.SHOPIFY_PRODUCT = exports.LOCATION = exports.PRICE = exports.END_DATE = exports.START_DATE = exports.PUBLISHED_AT = exports.FILE = exports.AUDIO = exports.VIDEO = exports.IMAGE = exports.TAGS = exports.CATEGORY = exports.LABEL = exports.ABOUT = exports.NAME = exports.DESCRIPTION = exports.SUBTITLE = exports.TITLE = exports.HANDLE = void 0;
exports.HANDLE = { label: 'Handle', name: 'handle', variant: 'slug' };
exports.TITLE = { label: 'Title', name: 'title', variant: 'string' };
exports.SUBTITLE = { label: 'Subtitle', name: 'subtitle', variant: 'string' };
exports.DESCRIPTION = { label: 'Description', name: 'description', variant: 'text' };
exports.NAME = { label: 'Name', name: 'name', variant: 'string' };
exports.ABOUT = { label: 'About', name: 'about', variant: 'text' };
exports.LABEL = { label: 'Label', name: 'label', variant: 'string' };
exports.CATEGORY = { label: 'Category', name: 'category', variant: 'string' };
exports.TAGS = { label: 'Tags', name: 'tags', variant: 'array' };
exports.IMAGE = { label: 'Image', name: 'image', variant: 'image' };
exports.VIDEO = { label: 'Video', name: 'video', variant: 'video' };
exports.AUDIO = { label: 'Audio', name: 'audio', variant: 'audio' };
exports.FILE = { label: 'File', name: 'file', variant: 'file' };
exports.PUBLISHED_AT = { label: 'Published At', name: 'published_at', variant: 'date' };
exports.START_DATE = { label: 'Start Date', name: 'start_date', variant: 'datetime' };
exports.END_DATE = { label: 'End Date', name: 'end_date', variant: 'datetime' };
exports.PRICE = { label: 'Price', name: 'price', variant: 'number' };
exports.LOCATION = { label: 'Location', name: 'location', variant: 'string' };
exports.SHOPIFY_PRODUCT = { label: 'Shopify Product', name: 'shopify_product', variant: 'shopify_product' };
exports.YOUTUBE_VIDEO = { label: 'Youtube Video', name: 'youtube_video', variant: 'youtube_video' };
exports.VIMEO_VIDEO = { label: 'Vimeo Video', name: 'vimeo_video', variant: 'vimeo_video' };
exports.SOUNDCLOUD_AUDIO = { label: 'Soundcloud Audio', name: 'soundcloud_audio', variant: 'soundcloud_audio' };
exports.DOCUMENT_FORM_FIELDS = {
    post: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    article: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.PUBLISHED_AT,
        exports.TAGS,
    ],
    place: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.LOCATION,
        exports.TAGS,
    ],
    event: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.START_DATE,
        exports.END_DATE,
        exports.LOCATION,
        exports.TAGS,
    ],
    person: [
        exports.IMAGE,
        exports.HANDLE,
        exports.NAME,
        exports.ABOUT,
        exports.SUBTITLE,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    product: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.PRICE,
        exports.TAGS,
    ],
    image: [
        exports.IMAGE,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.TAGS,
    ],
    video: [
        exports.IMAGE,
        exports.VIDEO,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    audio: [
        exports.IMAGE,
        exports.AUDIO,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    file: [
        exports.FILE,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    youtube: [
        exports.IMAGE,
        exports.YOUTUBE_VIDEO,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    vimeo: [
        exports.IMAGE,
        exports.VIMEO_VIDEO,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    soundcloud: [
        exports.IMAGE,
        exports.SOUNDCLOUD_AUDIO,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    shopify: [
        exports.IMAGE,
        exports.SHOPIFY_PRODUCT,
        exports.HANDLE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.PRICE,
        exports.DESCRIPTION,
        exports.TAGS,
    ]
};
exports.DOCUMENT_SHOW_FIELDS = {
    post: [
        exports.IMAGE,
        exports.TITLE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    article: [
        exports.IMAGE,
        exports.TITLE,
        exports.PUBLISHED_AT,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    place: [
        exports.IMAGE,
        exports.TITLE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.LOCATION,
        exports.TAGS,
    ],
    person: [
        exports.IMAGE,
        exports.NAME,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.ABOUT,
        exports.TAGS,
    ],
    event: [
        exports.IMAGE,
        exports.TITLE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.START_DATE,
        exports.END_DATE,
        exports.LOCATION,
        exports.TAGS,
    ],
    product: [
        exports.IMAGE,
        exports.TITLE,
        exports.PRICE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    image: [
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    video: [
        exports.VIDEO,
        exports.TITLE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS
    ],
    audio: [
        exports.AUDIO,
        exports.TITLE,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS
    ],
    file: [
        exports.FILE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.CATEGORY,
        exports.DESCRIPTION,
    ],
    youtube: [
        exports.YOUTUBE_VIDEO,
        exports.TAGS,
    ],
    vimeo: [
        exports.VIMEO_VIDEO,
        exports.TAGS,
    ],
    soundcloud: [
        exports.SOUNDCLOUD_AUDIO,
        exports.TAGS,
    ],
    shopify: [
        exports.SHOPIFY_PRODUCT,
        exports.TAGS
    ]
};

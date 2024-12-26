"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCUMENT_SHOW_FIELDS = exports.DOCUMENT_FORM_FIELDS = exports.SOUNDCLOUD_AUDIO = exports.VIMEO_VIDEO = exports.YOUTUBE_VIDEO = exports.SHOPIFY_PRODUCT = exports.LOCATION = exports.PRICE = exports.PUBLISHED_AT = exports.FILE = exports.AUDIO = exports.VIDEO = exports.IMAGE = exports.TAGS = exports.CATEGORY = exports.LABEL = exports.ABOUT = exports.NAME = exports.HTML = exports.DESCRIPTION = exports.SUBTITLE_TEXT = exports.HEADLINE = exports.SUBTITLE = exports.TITLE = exports.HANDLE = exports.CONTENT_TYPE = void 0;
exports.CONTENT_TYPE = {
    label: 'Content Type',
    name: 'content_type',
    variant: 'select',
    options: [
        { label: 'Post', value: 'post', icon: 'ri-file-text-fill' },
        { label: 'Article', value: 'article', icon: 'ri-file-text-fill' },
        { label: 'Place', value: 'place', icon: 'ri-map-pin-line' },
        { label: 'Event', value: 'event', icon: 'ri-calendar-event-fill' },
        { label: 'Person', value: 'person', icon: 'ri-user-fill' },
        { label: 'Product', value: 'product', icon: 'ri-shopping-cart-fill' },
        { label: 'Image', value: 'image', icon: 'ri-image-fill' },
        { label: 'Video', value: 'video', icon: 'ri-video-fill' },
        { label: 'Audio', value: 'audio', icon: 'ri-music-fill' },
        { label: 'File', value: 'file', icon: 'ri-file-fill' },
        { label: 'Youtube', value: 'youtube', icon: 'ri-youtube-fill' },
        { label: 'Vimeo', value: 'vimeo', icon: 'ri-vimeo-fill' },
        { label: 'Soundcloud', value: 'soundcloud', icon: 'ri-soundcloud-fill' },
        { label: 'Shopify', value: 'shopify', icon: 'ri-shopping-cart-fill' },
    ],
};
exports.HANDLE = { label: 'Handle', name: 'handle', variant: 'slug' };
exports.TITLE = { label: 'Title', name: 'title', variant: 'string' };
exports.SUBTITLE = {
    label: 'Subtitle',
    name: 'subtitle',
    variant: 'string',
};
exports.HEADLINE = {
    label: 'Headline',
    name: 'subtitle',
    variant: 'string',
};
exports.SUBTITLE_TEXT = {
    label: 'Subtitle',
    name: 'subtitle',
    variant: 'text',
};
exports.DESCRIPTION = {
    label: 'Description',
    name: 'description',
    variant: 'text',
};
exports.HTML = {
    label: 'HTML',
    name: 'html',
    variant: 'html',
};
exports.NAME = { label: 'Name', name: 'title', variant: 'string' };
exports.ABOUT = { label: 'About', name: 'description', variant: 'text' };
exports.LABEL = { label: 'Label', name: 'label', variant: 'string' };
exports.CATEGORY = {
    label: 'Category',
    name: 'category',
    variant: 'string',
};
exports.TAGS = { label: 'Tags', name: 'tags', variant: 'array' };
exports.IMAGE = { label: 'Image', name: 'image', variant: 'image' };
exports.VIDEO = { label: 'Video', name: 'video', variant: 'video' };
exports.AUDIO = { label: 'Audio', name: 'audio', variant: 'audio' };
exports.FILE = { label: 'File', name: 'file', variant: 'file' };
exports.PUBLISHED_AT = {
    label: 'Published on',
    name: 'published_at',
    variant: 'string',
};
exports.PRICE = { label: 'Price', name: 'price', variant: 'number' };
exports.LOCATION = {
    label: 'Location',
    name: 'location',
    variant: 'string',
};
exports.SHOPIFY_PRODUCT = {
    label: 'Shopify Product',
    name: 'shopify_product',
    variant: 'shopify_product',
};
exports.YOUTUBE_VIDEO = {
    label: 'Youtube Video',
    name: 'youtube_video',
    variant: 'youtube_video',
};
exports.VIMEO_VIDEO = {
    label: 'Vimeo Video',
    name: 'vimeo_video',
    variant: 'vimeo_video',
};
exports.SOUNDCLOUD_AUDIO = {
    label: 'Soundcloud Audio',
    name: 'soundcloud_audio',
    variant: 'soundcloud_audio',
};
exports.DOCUMENT_FORM_FIELDS = {
    post: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.TITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.SUBTITLE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    article: [
        exports.IMAGE,
        exports.TITLE,
        exports.HTML,
        exports.PUBLISHED_AT,
        exports.LABEL,
        exports.CATEGORY,
        exports.TAGS,
    ],
    place: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.LOCATION,
        exports.TAGS,
    ],
    event: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.LOCATION,
        exports.TAGS,
    ],
    person: [exports.CONTENT_TYPE, exports.IMAGE, exports.NAME, exports.ABOUT, exports.HEADLINE, exports.TAGS],
    product: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.PRICE,
        exports.TAGS,
    ],
    image: [exports.CONTENT_TYPE, exports.IMAGE, exports.TITLE, exports.LABEL, exports.CATEGORY, exports.TAGS],
    video: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.VIDEO,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    audio: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.AUDIO,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    file: [
        exports.CONTENT_TYPE,
        exports.FILE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    youtube: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.YOUTUBE_VIDEO,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    vimeo: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.VIMEO_VIDEO,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    soundcloud: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.SOUNDCLOUD_AUDIO,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    shopify: [
        exports.CONTENT_TYPE,
        exports.IMAGE,
        exports.SHOPIFY_PRODUCT,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LABEL,
        exports.CATEGORY,
        exports.PRICE,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
};
exports.DOCUMENT_SHOW_FIELDS = {
    post: [exports.IMAGE, exports.TITLE, exports.SUBTITLE, exports.CATEGORY, exports.DESCRIPTION, exports.TAGS],
    article: [exports.IMAGE, exports.TITLE, exports.PUBLISHED_AT, exports.CATEGORY, exports.HTML, exports.TAGS],
    place: [
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LOCATION,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.LOCATION,
        exports.TAGS,
    ],
    person: [exports.IMAGE, exports.NAME, exports.HEADLINE, exports.CATEGORY, exports.ABOUT, exports.TAGS],
    event: [
        exports.IMAGE,
        exports.TITLE,
        exports.SUBTITLE,
        exports.LOCATION,
        exports.CATEGORY,
        exports.DESCRIPTION,
        exports.TAGS,
    ],
    product: [exports.IMAGE, exports.TITLE, exports.SUBTITLE, exports.PRICE, exports.CATEGORY, exports.DESCRIPTION, exports.TAGS],
    image: [exports.IMAGE, exports.TITLE, exports.TAGS],
    video: [exports.VIDEO, exports.TITLE, exports.SUBTITLE, exports.CATEGORY, exports.DESCRIPTION, exports.TAGS],
    audio: [exports.AUDIO, exports.TITLE, exports.SUBTITLE, exports.CATEGORY, exports.DESCRIPTION, exports.TAGS],
    file: [exports.FILE, exports.TITLE, exports.SUBTITLE, exports.CATEGORY, exports.DESCRIPTION],
    youtube: [exports.YOUTUBE_VIDEO, exports.TAGS],
    vimeo: [exports.VIMEO_VIDEO, exports.TAGS],
    soundcloud: [exports.SOUNDCLOUD_AUDIO, exports.TAGS],
    shopify: [exports.SHOPIFY_PRODUCT, exports.TAGS],
};

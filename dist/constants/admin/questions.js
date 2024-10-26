"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUESTION_VARIANTS = exports.FILE_QUESTION_VARIANT = exports.VIDEO_QUESTION_VARIANT = exports.TEXT_QUESTION_VARIANT = exports.STRING_QUESTION_VARIANT = exports.RATING_QUESTION_VARIANT = exports.NUMBER_QUESTION_VARIANT = exports.LOCATION_QUESTION_VARIANT = exports.PRICE_QUESTION_VARIANT = exports.IMAGE_QUESTION_VARIANT = exports.SELECT_QUESTION_VARIANT = exports.DATE_QUESTION_VARIANT = exports.BOOLEAN_QUESTION_VARIANT = exports.TAG_QUESTION_VARIANT = exports.URL_QUESTION_VARIANT = exports.PHONE_QUESTION_VARIANT = exports.EMAIL_QUESTION_VARIANT = exports.AUDIO_QUESTION_VARIANT = exports.MULTIPLE_CHOICE_QUESTION_VARIANT = exports.SINGLE_CHOICE_QUESTION_VARIANT = void 0;
exports.SINGLE_CHOICE_QUESTION_VARIANT = {
    icon: 'ListTodo',
    label: 'Single Choice',
    variant: 'single_choice',
    description: 'Select a single option',
    color: 'bg-purple-500',
};
exports.MULTIPLE_CHOICE_QUESTION_VARIANT = {
    icon: 'ListChecks',
    label: 'Select Multiple',
    variant: 'multiple_choice',
    description: 'Select multiple options',
    color: 'bg-purple-500',
};
exports.AUDIO_QUESTION_VARIANT = {
    icon: 'Headphones',
    label: 'Audio',
    variant: 'audio',
    description: 'Audio URL',
    color: 'bg-pink-500',
};
exports.EMAIL_QUESTION_VARIANT = {
    icon: 'Mail',
    label: 'Email',
    description: 'Email address',
    variant: 'email',
    color: 'bg-green-500',
};
exports.PHONE_QUESTION_VARIANT = {
    icon: 'Phone',
    label: 'Phone',
    description: 'Phone number',
    variant: 'phone',
    color: 'bg-green-500',
};
exports.URL_QUESTION_VARIANT = {
    icon: 'Link',
    label: 'URL',
    description: 'Website URL',
    variant: 'url',
    color: 'bg-green-500',
};
exports.TAG_QUESTION_VARIANT = {
    icon: 'List',
    label: 'Tags',
    description: 'Multiple keywords',
    variant: 'array',
    color: 'bg-purple-500',
};
exports.BOOLEAN_QUESTION_VARIANT = {
    icon: 'ToggleLeft',
    label: 'Switch',
    description: 'True or false switch',
    variant: 'boolean',
    color: 'bg-sky-500',
};
exports.DATE_QUESTION_VARIANT = {
    icon: 'Calendar',
    label: 'Date',
    description: 'Calendar date',
    variant: 'date',
    color: 'bg-amber-500',
};
exports.SELECT_QUESTION_VARIANT = {
    icon: 'ChevronDownSquare',
    label: 'Select',
    description: 'Select menu of choices',
    variant: 'select',
    color: 'bg-purple-500',
};
exports.IMAGE_QUESTION_VARIANT = {
    icon: 'Image',
    label: 'Image',
    description: 'Image URL',
    variant: 'image',
    color: 'bg-pink-500',
};
exports.PRICE_QUESTION_VARIANT = {
    icon: 'DollarSign',
    label: 'Price',
    description: 'Currency in USD',
    variant: 'price',
    color: 'bg-purple-500',
};
exports.LOCATION_QUESTION_VARIANT = {
    icon: 'MapPin',
    label: 'Location',
    description: 'Address with coordinates',
    variant: 'location',
    color: 'bg-teal-500',
};
exports.NUMBER_QUESTION_VARIANT = {
    icon: 'Hash',
    label: 'Number',
    description: 'Integer values.',
    variant: 'number',
    color: 'bg-purple-500',
};
exports.RATING_QUESTION_VARIANT = {
    icon: 'Star',
    label: 'Rating',
    description: 'Five-star ratings',
    variant: 'rating',
    color: 'bg-purple-500',
};
exports.STRING_QUESTION_VARIANT = {
    icon: 'Type',
    label: 'Short text',
    description: 'Single line of text',
    variant: 'string',
    color: 'bg-purple-500',
};
exports.TEXT_QUESTION_VARIANT = {
    icon: 'FileText',
    label: 'Long text',
    description: 'Paragraph of text',
    variant: 'text',
    color: 'bg-purple-500',
};
exports.VIDEO_QUESTION_VARIANT = {
    icon: 'Video',
    label: 'Video',
    description: 'Video URL',
    variant: 'video',
    color: 'bg-pink-500',
};
exports.FILE_QUESTION_VARIANT = {
    icon: 'File',
    label: 'File',
    description: 'Upload an attachment',
    variant: 'file',
    color: 'bg-pink-500',
};
exports.QUESTION_VARIANTS = [
    exports.SINGLE_CHOICE_QUESTION_VARIANT,
    exports.MULTIPLE_CHOICE_QUESTION_VARIANT,
    exports.STRING_QUESTION_VARIANT,
    exports.TEXT_QUESTION_VARIANT,
    exports.SELECT_QUESTION_VARIANT,
    exports.TAG_QUESTION_VARIANT,
    exports.EMAIL_QUESTION_VARIANT,
    exports.PHONE_QUESTION_VARIANT,
    exports.URL_QUESTION_VARIANT,
    exports.BOOLEAN_QUESTION_VARIANT,
    exports.DATE_QUESTION_VARIANT,
    exports.NUMBER_QUESTION_VARIANT,
    exports.LOCATION_QUESTION_VARIANT,
    exports.RATING_QUESTION_VARIANT,
    exports.PRICE_QUESTION_VARIANT,
    exports.IMAGE_QUESTION_VARIANT,
    exports.VIDEO_QUESTION_VARIANT,
    exports.FILE_QUESTION_VARIANT,
];

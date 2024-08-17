"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZAP_TYPES = exports.WEBHOOK_EVENT_TYPES = exports.ACTION_TYPES = void 0;
exports.ACTION_TYPES = [
    { label: 'Resource created', value: 'resources.create' },
    { label: 'Resource updated', value: 'resources.save' },
    { label: 'Resource deleted', value: 'resources.delete' },
];
exports.WEBHOOK_EVENT_TYPES = [
    { label: 'User registered', value: 'users.create' },
    { label: 'User updated', value: 'users.update' },
    { label: 'Resource created', value: 'resources.create' },
    { label: 'Resource updated', value: 'resources.save' },
    { label: 'Resource deleted', value: 'resources.delete' },
];
exports.ZAP_TYPES = [
    { label: 'Send email', value: 'email' },
    { label: 'Send webhook', value: 'webhook' },
];

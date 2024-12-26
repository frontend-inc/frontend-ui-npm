"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFormMetafields = void 0;
var buildFormMetafields = function (params) {
    var _a = params || {}, enableCompany = _a.enableCompany, enablePhone = _a.enablePhone, enableReason = _a.enableReason, enableMessage = _a.enableMessage, _b = _a.reasonOptions, reasonOptions = _b === void 0 ? [] : _b;
    var metafields = [];
    if (enableCompany) {
        metafields.push({
            label: 'Company',
            name: 'company',
            placeholder: 'Company',
            variant: 'string',
        });
    }
    if (enablePhone) {
        metafields.push({
            label: 'Phone',
            name: 'phone',
            placeholder: 'Phone',
            variant: 'string',
        });
    }
    if (enableReason) {
        metafields.push({
            label: 'Reason',
            name: 'reason',
            placeholder: 'Reason',
            variant: 'select',
            options: reasonOptions,
        });
    }
    if (enableMessage) {
        metafields.push({
            label: 'Message',
            name: 'message',
            placeholder: 'Message',
            variant: 'textarea',
        });
    }
    return metafields;
};
exports.buildFormMetafields = buildFormMetafields;

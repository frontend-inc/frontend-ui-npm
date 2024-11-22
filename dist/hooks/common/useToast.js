'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_shadcn_1 = require("frontend-shadcn");
var useToast = function () {
    var showAlertError = function (message) {
        return (0, frontend_shadcn_1.toast)({
            variant: 'destructive',
            title: message,
        });
    };
    var showAlertSuccess = function (message) {
        return (0, frontend_shadcn_1.toast)({
            variant: 'default',
            title: message,
        });
    };
    return {
        showAlertError: showAlertError,
        showAlertSuccess: showAlertSuccess,
    };
};
exports.default = useToast;

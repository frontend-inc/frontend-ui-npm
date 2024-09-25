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
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var AdminFormResponseShow = function (props) {
    var _a;
    var formId = props.formId, form_response = props.resource, loading = props.loading, open = props.open, handleClose = props.handleClose, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleEdit = props.handleEdit, handleDelete = props.handleDelete;
    var _b = (0, hooks_1.useFormBuilder)(), formLoading = _b.loading, form = _b.form, findForm = _b.findForm;
    (0, react_1.useEffect)(function () {
        if (formId) {
            findForm(formId);
        }
    }, [formId]);
    (0, react_1.useEffect)(function () {
        if (form) {
            console.log(form);
        }
    }, [form]);
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, __assign({}, props, { image: (_a = form_response === null || form_response === void 0 ? void 0 : form_response.image) === null || _a === void 0 ? void 0 : _a.url, primary: form_response === null || form_response === void 0 ? void 0 : form_response.name, secondary: form_response === null || form_response === void 0 ? void 0 : form_response.email, fields: form === null || form === void 0 ? void 0 : form.questions }))));
};
exports.default = AdminFormResponseShow;

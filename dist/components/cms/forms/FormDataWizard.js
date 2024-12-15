'use client';
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var sonner_1 = require("sonner");
var FormDataWizard = function (props) {
    var _a;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(false), submitted = _c[0], setSubmitted = _c[1];
    var _d = props || {}, formId = _d.formId, buttonText = _d.buttonText;
    var _e = (0, hooks_1.useForms)(), loading = _e.loading, form = _e.form, findForm = _e.findForm;
    var _f = (0, hooks_1.useContacts)({
        formId: formId,
    }), responseLoading = _f.loading, contact = _f.contact, setContact = _f.setContact, handleChange = _f.handleChange, updateContact = _f.updateContact, removeAttachment = _f.removeAttachment, addAttachment = _f.addAttachment, submitForm = _f.submitForm;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(contact === null || contact === void 0 ? void 0 : contact.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateContact(__assign(__assign({}, contact), { form_id: form === null || form === void 0 ? void 0 : form.id }))];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, submitForm(contact)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setSubmitted(true);
                        (0, sonner_1.toast)('Form submitted successfully');
                        handleResetForm();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRemove = function (name) {
        removeAttachment(contact === null || contact === void 0 ? void 0 : contact.id, name);
    };
    var handleAddAttachment = function (name, attachmentId) {
        addAttachment(contact === null || contact === void 0 ? void 0 : contact.id, name, attachmentId);
    };
    var handleResetForm = function () {
        setContact({});
        setOpen(false);
    };
    (0, react_1.useEffect)(function () {
        if (formId) {
            findForm(formId);
        }
    }, [formId]);
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-2" },
        react_1.default.createElement(__1.FormCard, { checkMark: submitted, image: (_a = form === null || form === void 0 ? void 0 : form.image) === null || _a === void 0 ? void 0 : _a.url, title: form === null || form === void 0 ? void 0 : form.title, subtitle: form === null || form === void 0 ? void 0 : form.description, buttonText: buttonText, handleClick: function () { return setOpen(true); } }),
        react_1.default.createElement(__1.FormWizardModal, { open: open, handleClose: function () { return setOpen(false); }, loading: loading || responseLoading, resource: contact, setResource: setContact, 
            //@ts-ignore
            handleChange: handleChange, handleSubmit: handleSubmit, fields: form === null || form === void 0 ? void 0 : form.questions, handleRemove: handleRemove, handleRemoveAttachment: handleRemove, handleAddAttachment: handleAddAttachment })));
};
exports.default = FormDataWizard;

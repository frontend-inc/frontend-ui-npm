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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var sonner_1 = require("sonner");
// Call To Action
var ContactForm = function (props) {
    var _a = props || {}, _b = _a.metafields, metafields = _b === void 0 ? [] : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Send Message' : _c;
    var _d = (0, hooks_1.useContacts)(), errors = _d.errors, delayedLoading = _d.delayedLoading, contact = _d.contact, setContact = _d.setContact, handleChange = _d.handleChange, createContact = _d.createContact;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(contact === null || contact === void 0 ? void 0 : contact.email) || !(contact === null || contact === void 0 ? void 0 : contact.name) || !(contact === null || contact === void 0 ? void 0 : contact.message)) {
                        (0, sonner_1.toast)('Please fill out all required fields');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, createContact(__assign(__assign({}, contact), { source: 'contact' }))];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setContact({});
                        (0, sonner_1.toast)('Thank you for contacting us!');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(components_1.Container, { maxWidth: "md" },
        react_1.default.createElement(components_1.Form, { loading: delayedLoading, fields: __spreadArray(__spreadArray([
                {
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Full name',
                    variant: 'string',
                },
                {
                    label: 'Email',
                    name: 'email',
                    placeholder: 'Email',
                    variant: 'string',
                }
            ], metafields, true), [
                {
                    label: 'Message',
                    name: 'message',
                    placeholder: 'Leave a message',
                    variant: 'text',
                },
                {
                    label: 'Join our newsletter',
                    name: 'accepts_marketing',
                    variant: 'boolean',
                },
            ], false), resource: contact, handleChange: handleChange, errors: errors, handleSubmit: handleSubmit, buttonText: buttonText })));
};
exports.default = ContactForm;

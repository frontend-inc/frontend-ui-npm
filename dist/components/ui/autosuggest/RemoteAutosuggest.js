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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var __1 = require("../..");
var hooks_1 = require("../../../hooks");
var lodash_1 = require("lodash");
var RemoteAutosuggest = function (props) {
    var errors = props.errors, value = props.value, label = props.label, name = props.name, url = props.url, _a = props.displayField, displayField = _a === void 0 ? 'title' : _a, imageField = props.imageField, handleChange = props.handleChange, handleClear = props.handleClear, _b = props.valueParam, valueParam = _b === void 0 ? 'id' : _b, _c = props.placeholder, placeholder = _c === void 0 ? 'Search' : _c, _d = props.defaultQuery, defaultQuery = _d === void 0 ? {} : _d, _e = props.direction, direction = _e === void 0 ? 'column' : _e, _f = props.defaultOptions, defaultOptions = _f === void 0 ? [] : _f, _g = props.enableRemoteSearch, enableRemoteSearch = _g === void 0 ? false : _g, _h = props.enableClear, enableClear = _h === void 0 ? false : _h;
    var _j = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _j.error, clearError = _j.clearError;
    var _k = (0, frontend_js_1.useResource)({
        url: url,
        name: name,
    }), loading = _k.loading, delayedLoading = _k.delayedLoading, resources = _k.resources, findMany = _k.findMany;
    var _l = (0, react_1.useState)(), option = _l[0], setOption = _l[1];
    var _m = (0, react_1.useState)([]), options = _m[0], setOptions = _m[1];
    var handleInputChange = function (newValue) {
        if (error)
            clearError();
        findOption(newValue);
        if (enableRemoteSearch && !loading) {
            //@ts-ignore
            findMany(__assign(__assign({}, defaultQuery), { keywords: newValue }));
        }
    };
    var formatResources = function (resources) {
        return resources.map(function (resource) { return ({
            label: (0, lodash_1.get)(resource, displayField),
            value: (0, lodash_1.get)(resource, valueParam),
            image: imageField ? (0, lodash_1.get)(resource, imageField) : null,
        }); });
    };
    var findOption = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var resource;
        return __generator(this, function (_a) {
            if (!value)
                return [2 /*return*/, null];
            resource = resources.find(function (resource) { return resource[displayField] == value; });
            if (resource) {
                setOption({
                    label: (0, lodash_1.get)(resource, displayField),
                    value: (0, lodash_1.get)(resource, valueParam),
                });
            }
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (resources) {
            setOptions(__spreadArray(__spreadArray([], formatResources(resources), true), defaultOptions, true));
        }
    }, [resources]);
    (0, react_1.useEffect)(function () {
        if (value && (resources === null || resources === void 0 ? void 0 : resources.length) > 0) {
            var resource = resources.find(function (resource) { return (0, lodash_1.get)(resource, valueParam) == value; });
            if (resource) {
                setOption({
                    label: (0, lodash_1.get)(resource, displayField),
                    value: (0, lodash_1.get)(resource, valueParam),
                });
            }
        }
    }, [value, resources]);
    (0, react_1.useEffect)(function () {
        if (url) {
            //@ts-ignore
            findMany(__assign(__assign({}, defaultQuery), { per_page: 100 }));
        }
    }, [url]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (((_a = Object.keys(defaultQuery)) === null || _a === void 0 ? void 0 : _a.length) > 0 && url) {
            //@ts-ignore
            findMany(__assign(__assign({}, defaultQuery), { per_page: 100 }));
        }
    }, [defaultQuery]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Autosuggest, { errors: errors, loading: delayedLoading, direction: direction, label: label, name: name, value: option, options: options, placeholder: placeholder, handleChange: handleChange, handleInputChange: handleInputChange, handleClear: handleClear, enableClear: enableClear })));
};
exports.default = RemoteAutosuggest;

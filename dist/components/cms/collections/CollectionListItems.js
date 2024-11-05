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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var __2 = require("../..");
var hooks_1 = require("../../../hooks");
var CollectionListItems = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), setResource = _a.setResource, loading = _a.loading, resources = _a.resources, page = _a.page, numPages = _a.numPages, loadMore = _a.loadMore, setOpenShow = _a.setOpenShow;
    var selectable = props.selectable, _b = props.layout, layout = _b === void 0 ? 'list' : _b, _c = props.buttons, buttons = _c === void 0 ? [] : _c, _d = props.style, style = _d === void 0 ? 'list' : _d, handleClick = props.handleClick, _e = props.metafields, metafields = _e === void 0 ? [] : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableFavorites, enableFavorites = _h === void 0 ? false : _h, _j = props.enableLikes, enableLikes = _j === void 0 ? false : _j, _k = props.enableComments, enableComments = _k === void 0 ? false : _k, _l = props.slots, slots = _l === void 0 ? {
        item: {},
    } : _l;
    var setSubscribeOpen = (0, hooks_1.useShop)().setSubscribeOpen;
    var handleShowClick = function (resource) {
        if (handleClick) {
            handleClick(resource);
        }
        else if (resource === null || resource === void 0 ? void 0 : resource.premium) {
            setSubscribeOpen(true);
        }
        else {
            setResource(resource);
            setOpenShow(true);
        }
    };
    var handlePaginate = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadMore()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "flex flex-col w-full space-y-2" },
        react_1.default.createElement(__2.DataLayout, __assign({}, slots.list, { layout: layout, loading: loading }), resources === null || resources === void 0 ? void 0 : resources.map(function (resource, index) { return (react_1.default.createElement(__2.CollectionListItem, __assign({ key: index, style: style, selectable: selectable, resource: resource, metafields: metafields, handleClick: function () { return handleShowClick(resource); }, buttons: buttons, enableComments: enableComments, enableFavorites: enableFavorites, enableLikes: enableLikes, enableGradient: enableGradient, enableOverlay: enableOverlay }, slots.item))); })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: handlePaginate })));
};
exports.default = CollectionListItems;

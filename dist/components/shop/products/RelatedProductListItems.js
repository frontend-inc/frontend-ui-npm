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
var material_1 = require("@mui/material");
var __1 = require("../..");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
var router_1 = require("next/router");
var __2 = require("../..");
var hooks_2 = require("../../../hooks");
var RelatedProductListItems = function (props) {
    var router = (0, router_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var _a = (0, frontend_js_1.useResourceContext)(), loading = _a.loading, setResource = _a.setResource, references = _a.resources, page = _a.page, numPages = _a.numPages, loadMore = _a.loadMore, setOpenShow = _a.setOpenShow;
    var _b = props.grid, grid = _b === void 0 ? false : _b, _c = props.buttons, buttons = _c === void 0 ? [] : _c, _d = props.style, style = _d === void 0 ? 'card' : _d, href = props.href, handleClick = props.handleClick, _e = props.displayFields, displayFields = _e === void 0 ? [] : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.enableEdit, enableEdit = _h === void 0 ? false : _h, _j = props.enableDelete, enableDelete = _j === void 0 ? false : _j, _k = props.enableFavorites, enableFavorites = _k === void 0 ? false : _k, _l = props.enableLikes, enableLikes = _l === void 0 ? false : _l, _m = props.enableUsers, enableUsers = _m === void 0 ? false : _m, _o = props.enableRatings, enableRatings = _o === void 0 ? false : _o, _p = props.enableComments, enableComments = _p === void 0 ? false : _p, _q = props.slots, slots = _q === void 0 ? {
        list: {},
        item: {},
    } : _q;
    var handleShowClick = function (target) {
        if (handleClick) {
            handleClick(target);
        }
        else if (href) {
            if (clientUrl && href && (target === null || target === void 0 ? void 0 : target.handle)) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                router.push("".concat(clientUrl).concat(href, "/").concat(target === null || target === void 0 ? void 0 : target.handle));
            }
        }
        else {
            setResource(target);
            setOpenShow(true);
        }
    };
    var _r = (0, hooks_2.useForms)(), handleEdit = _r.handleEdit, handleDeleteClick = _r.handleDeleteClick;
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
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 2 },
        react_1.default.createElement(__2.DataLayout, __assign({}, slots.list, { grid: grid }), references === null || references === void 0 ? void 0 : references.map(function (reference, index) {
            var target = reference === null || reference === void 0 ? void 0 : reference.target;
            return (react_1.default.createElement(__2.ProductListItem, __assign({ key: index, style: style, resource: target, displayFields: displayFields, handleClick: function () { return handleShowClick(target); }, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: function () { return handleEdit(target); }, handleDelete: function () { return handleDeleteClick(target); }, buttons: buttons, enableUsers: enableUsers, enableComments: enableComments, enableFavorites: enableFavorites, enableLikes: enableLikes, enableRatings: enableRatings, enableGradient: enableGradient, enableOverlay: enableOverlay }, slots.item)));
        })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, handlePaginate: handlePaginate })));
};
exports.default = RelatedProductListItems;

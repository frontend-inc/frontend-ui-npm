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
var CommentList = function (props) {
    var url = props.url, handle = props.handle;
    var _a = (0, react_1.useState)(null), activeComment = _a[0], setActiveComment = _a[1];
    var _b = (0, react_1.useState)(false), openDelete = _b[0], setOpenDelete = _b[1];
    var _c = (0, hooks_1.useComments)({
        url: url,
        handle: handle,
    }), loading = _c.loading, errors = _c.errors, query = _c.query, comment = _c.comment, comments = _c.comments, setComment = _c.setComment, findComments = _c.findComments, handleChange = _c.handleChange, createComment = _c.createComment, deleteComment = _c.deleteComment, totalCount = _c.totalCount, page = _c.page, numPages = _c.numPages, loadMore = _c.loadMore;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createComment(comment)];
                case 1:
                    _a.sent();
                    findComments(__assign(__assign({}, query), { page: 1 }));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteComment = function (comment) {
        setActiveComment(comment);
        setOpenDelete(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteComment(activeComment === null || activeComment === void 0 ? void 0 : activeComment.id)];
                case 1:
                    _a.sent();
                    setOpenDelete(false);
                    findComments(__assign(__assign({}, query), { page: 1 }));
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (url && handle) {
            findComments({
                per_page: 5,
            });
        }
    }, [url, handle]);
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4 border-divider" },
        react_1.default.createElement("div", { className: "flex flex-col space-y-2 w-full items-start justify-between" },
            react_1.default.createElement("div", { className: "text-lg font-semibold text-foreground" },
                "Comments (",
                totalCount,
                ")")),
        react_1.default.createElement(__1.CommentForm, { errors: errors, loading: loading, comment: comment, handleChange: handleChange, handleSubmit: handleSubmit }),
        react_1.default.createElement("ul", { className: "space-y-4" }, comments === null || comments === void 0 ? void 0 : comments.map(function (comment, i) { return (react_1.default.createElement(__1.CommentListItem, { key: i, url: url, handle: handle, comment: comment, handleDelete: handleDeleteComment })); })),
        react_1.default.createElement(__1.LoadMore, { handlePaginate: loadMore, page: page, numPages: numPages }),
        react_1.default.createElement(__1.AlertModal, { loading: loading, open: openDelete, handleClose: function () { return setOpenDelete(false); }, handleConfirm: handleDelete })));
};
exports.default = CommentList;

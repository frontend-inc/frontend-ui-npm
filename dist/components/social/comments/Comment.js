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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var components_2 = require("../../../components");
var moment_1 = __importDefault(require("moment"));
var CommentForm_1 = __importDefault(require("./CommentForm"));
var Comment = function (props) {
    var _a, _b, _c, _d, _e;
    var url = props.url, handle = props.handle, _f = props.level, level = _f === void 0 ? 0 : _f, parentComment = props.comment, handleDelete = props.handleDelete;
    var _g = (0, react_1.useState)(false), openComment = _g[0], setOpenComment = _g[1];
    var _h = (0, react_1.useState)(false), showReplies = _h[0], setShowReplies = _h[1];
    var handleShowReplies = function () {
        setShowReplies(!showReplies);
    };
    var _j = (0, hooks_1.useComments)({
        url: url,
        handle: handle,
    }), loading = _j.loading, delayedLoading = _j.delayedLoading, errors = _j.errors, comment = _j.comment, setComment = _j.setComment, handleChange = _j.handleChange, createComment = _j.createComment;
    var handleReply = function () {
        setOpenComment(!openComment);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newComment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createComment(comment)];
                case 1:
                    newComment = _a.sent();
                    if (newComment === null || newComment === void 0 ? void 0 : newComment.id) {
                        parentComment.replies.push(newComment);
                        setShowReplies(true);
                        setOpenComment(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        setComment({
            parent_id: parentComment === null || parentComment === void 0 ? void 0 : parentComment.id,
        });
    }, [parentComment]);
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.ListItem, { sx: __assign(__assign({}, sx.listItem), { pl: Math.min(level * 7, 14) }), secondaryAction: react_1.default.createElement(material_1.IconButton, { onClick: handleReply },
                react_1.default.createElement(components_2.Icon, { name: "MessageSquare", size: 20 })) },
            react_1.default.createElement(material_1.ListItemIcon, { sx: sx.listItemIcon },
                react_1.default.createElement(components_1.UserAvatar, { user: parentComment === null || parentComment === void 0 ? void 0 : parentComment.user })),
            react_1.default.createElement(material_1.ListItemText, { primary: react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.primary", sx: sx.commentText }, parentComment === null || parentComment === void 0 ? void 0 : parentComment.body), secondary: react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: sx.caption }, "@".concat((_a = parentComment === null || parentComment === void 0 ? void 0 : parentComment.user) === null || _a === void 0 ? void 0 : _a.username),
                    " commented",
                    ' ',
                    (0, moment_1.default)(parentComment === null || parentComment === void 0 ? void 0 : parentComment.created_at).fromNow()) })),
        react_1.default.createElement(material_1.Collapse, { in: openComment },
            react_1.default.createElement(CommentForm_1.default, { pl: Math.min(level * 7, 14), loading: delayedLoading, errors: errors, comment: comment, handleChange: handleChange, handleSubmit: handleSubmit })),
        ((_b = parentComment === null || parentComment === void 0 ? void 0 : parentComment.replies) === null || _b === void 0 ? void 0 : _b.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null, !showReplies && (react_1.default.createElement(material_1.Box, { sx: {
                pl: Math.min(level * 7, 14),
            } },
            react_1.default.createElement(material_1.Link, { sx: sx.link, onClick: handleShowReplies },
                "Show ", (_c = parentComment === null || parentComment === void 0 ? void 0 : parentComment.replies) === null || _c === void 0 ? void 0 :
                _c.length,
                ' ',
                ((_d = parentComment === null || parentComment === void 0 ? void 0 : parentComment.replies) === null || _d === void 0 ? void 0 : _d.length) > 1 ? 'replies' : 'reply'))))),
        react_1.default.createElement(material_1.Box, { sx: __assign(__assign({}, sx.divider), { ml: Math.min(level * 7, 14) }) }),
        react_1.default.createElement(material_1.Collapse, { in: showReplies }, (_e = parentComment === null || parentComment === void 0 ? void 0 : parentComment.replies) === null || _e === void 0 ? void 0 : _e.map(function (reply) { return (react_1.default.createElement(Comment, { key: reply.id, url: url, handle: handle, comment: reply, level: level + 1, handleDelete: handleDelete })); }))));
};
exports.default = Comment;
var sx = {
    root: {
        py: 1,
    },
    showRepliesButton: {
        pl: 7,
    },
    listItem: {
        alignItems: 'flex-start',
        '&:hover .MuiBox-root': {
            display: 'block',
        },
    },
    listItemIcon: {
        mt: 1,
        mr: 2
    },
    commentText: {
        mb: 1,
        color: 'text.primary',
        whiteSpace: 'pre-wrap',
        '& span': {
            fontWeight: 500,
        },
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    link: {
        cursor: 'pointer',
        color: 'text.secondary',
        '&:hover': {
            color: 'text.primary',
        },
    },
    caption: {
        fontSize: 14,
    },
    footerText: {},
    showReplyButton: {
        color: 'text.secondary',
    },
    divider: {
        pb: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
};

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
var context_1 = require("../../../context");
var frontend_js_1 = require("frontend-js");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var helpers_1 = require("../../../helpers");
var frontend_js_2 = require("frontend-js");
var ForeignCollection = function (props) {
    var setAuthOpen = (0, react_1.useContext)(context_1.AppContext).setAuthOpen;
    var currentUser = (0, frontend_js_2.useAuth)().currentUser;
    var fields = props.fields, _resource = props.resource, _a = props.layout, layout = _a === void 0 ? 'drawer' : _a, _b = props.variant, variant = _b === void 0 ? 'list' : _b, _c = props.style, style = _c === void 0 ? 'card' : _c, contentType = props.contentType, foreignContentType = props.foreignContentType, href = props.href, _d = props.perPage, perPage = _d === void 0 ? 10 : _d, _e = props.query, defaultQuery = _e === void 0 ? null : _e, _f = props.enableBorder, enableBorder = _f === void 0 ? false : _f, _g = props.enableGradient, enableGradient = _g === void 0 ? false : _g, _h = props.enableLoadMore, enableLoadMore = _h === void 0 ? true : _h, _j = props.enableCreate, enableCreate = _j === void 0 ? false : _j, _k = props.enableEdit, enableEdit = _k === void 0 ? false : _k, _l = props.enableDelete, enableDelete = _l === void 0 ? false : _l;
    var router = (0, router_1.useRouter)();
    var _m = (0, react_1.useState)(false), openModal = _m[0], setOpenModal = _m[1];
    var _o = (0, react_1.useState)(false), openDeleteModal = _o[0], setOpenDeleteModal = _o[1];
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _p = (0, frontend_js_1.useDocuments)({
        collection: contentType,
    }), query = _p.query, resources = _p.resources, page = _p.page, numPages = _p.numPages, loadMore = _p.loadMore, findLinks = _p.findLinks, addLinks = _p.addLinks;
    var _q = (0, frontend_js_1.useDocuments)({
        collection: foreignContentType,
    }), errors = _q.errors, loading = _q.loading, delayedLoading = _q.delayedLoading, resource = _q.resource, setResource = _q.setResource, update = _q.update, create = _q.create, destroy = _q.destroy, handleDataChange = _q.handleDataChange, removeAttachment = _q.removeAttachment;
    var handleClick = function (item) {
        if (clientUrl && href && (item === null || item === void 0 ? void 0 : item.handle)) {
            router.push("".concat(clientUrl).concat(href, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    var handleAdd = function () {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource({});
        setOpenModal(!openModal);
    };
    var handleEdit = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenModal(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    resp = void 0;
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, update(resource)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 5];
                case 2: return [4 /*yield*/, create(resource)];
                case 3:
                    resp = _a.sent();
                    if (!(resp === null || resp === void 0 ? void 0 : resp.id)) return [3 /*break*/, 5];
                    return [4 /*yield*/, addLinks(_resource === null || _resource === void 0 ? void 0 : _resource.id, [resp.id])];
                case 4:
                    _a.sent();
                    handleFetchResources();
                    _a.label = 5;
                case 5:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        handleFetchResources();
                        setResource({});
                        setOpenModal(false);
                    }
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    console.log('Error', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (item) {
        if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
            return setAuthOpen(true);
        setResource(item);
        setOpenDeleteModal(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, destroy(resource === null || resource === void 0 ? void 0 : resource.id)];
                case 1:
                    _a.sent();
                    setOpenDeleteModal(false);
                    setOpenModal(false);
                    handleFetchResources();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleRemove = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id))
                        return [2 /*return*/, setAuthOpen(true)];
                    if (!(resource === null || resource === void 0 ? void 0 : resource.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, removeAttachment(resource === null || resource === void 0 ? void 0 : resource.id, name)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleFetchResources = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if ((_resource === null || _resource === void 0 ? void 0 : _resource.id) && foreignContentType) {
                findLinks(_resource.id, foreignContentType, __assign(__assign(__assign({}, query), defaultQuery), { per_page: perPage, page: 1 }));
            }
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        if ((_resource === null || _resource === void 0 ? void 0 : _resource.id) && foreignContentType) {
            handleFetchResources();
        }
    }, [_resource === null || _resource === void 0 ? void 0 : _resource.id, foreignContentType, currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 1, sx: sx.root },
        enableCreate && (react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: handleAdd, startIcon: react_1.default.createElement(components_1.Icon, { name: "Plus", size: 20 }) }, "Add"))),
        layout == 'inline' && (react_1.default.createElement(material_1.Collapse, { in: openModal },
            react_1.default.createElement(material_1.Stack, { direction: "column", sx: sx.form, spacing: 1 },
                react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, helpers_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove }),
                react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: delayedLoading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save')))),
        react_1.default.createElement(components_1.CollectionList, { actions: [], variant: variant, style: style, resources: resources, handleClick: handleClick, enableBorder: enableBorder, enableGradient: enableGradient, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDeleteClick }),
        enableLoadMore && (react_1.default.createElement(components_1.LoadMore, { page: page, numPages: numPages, loadMore: loadMore })),
        layout == 'drawer' && (react_1.default.createElement(components_1.Drawer, { open: openModal, handleClose: function () { return setOpenModal(false); }, title: (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Edit' : 'Add', actions: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (resource === null || resource === void 0 ? void 0 : resource.id) ? 'Update' : 'Save') },
            react_1.default.createElement(components_1.Form, { loading: loading, errors: errors, fields: fields, resource: (0, helpers_1.flattenDocument)(resource), handleChange: handleDataChange, handleRemove: handleRemove }))),
        react_1.default.createElement(components_1.AlertModal, { open: openDeleteModal, handleClose: function () { return setOpenDeleteModal(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete })));
};
exports.default = ForeignCollection;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    item: {
        p: 2,
    },
    form: {
        borderRadius: function (theme) { return "".concat(theme.shape.borderRadius, "px"); },
        p: 2,
        bgcolor: 'secondary.light',
    },
};

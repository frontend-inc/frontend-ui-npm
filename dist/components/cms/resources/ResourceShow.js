"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ResourceDetails_1 = __importDefault(require("./ResourceDetails"));
var ResourceModal_1 = __importDefault(require("./ResourceModal"));
var ResourceShow = function (props) {
    var _a;
    var _b = props || {}, loading = _b.loading, title = _b.title, open = _b.open, handleClose = _b.handleClose, resource = _b.resource, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleEdit = _b.handleEdit, handleDelete = _b.handleDelete, _c = _b.fields, fields = _c === void 0 ? [] : _c;
    return (react_1.default.createElement(ResourceModal_1.default, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(ResourceDetails_1.default, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: resource === null || resource === void 0 ? void 0 : resource.description, resource: resource, fields: fields })));
};
exports.default = ResourceShow;

"use strict";
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
var frontend_js_1 = require("frontend-js");
var DataShow = function (props) {
    var _a;
    var _b = (0, frontend_js_1.useResourceContext)(), findOne = _b.findOne, openShow = _b.openShow, setOpenShow = _b.setOpenShow, resource = _b.resource;
    var _c = props || {}, loading = _c.loading, enableEdit = _c.enableEdit, enableDelete = _c.enableDelete, handleEdit = _c.handleEdit, handleDelete = _c.handleDelete, _d = _c.fields, fields = _d === void 0 ? [] : _d;
    (0, react_1.useEffect)(function () {
        if (openShow) {
            findOne(resource === null || resource === void 0 ? void 0 : resource.handle);
        }
    }, [openShow]);
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: openShow, handleClose: function () { return setOpenShow(false); }, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { label: resource === null || resource === void 0 ? void 0 : resource.label, image: (_a = resource === null || resource === void 0 ? void 0 : resource.image) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.title, secondary: resource === null || resource === void 0 ? void 0 : resource.description, resource: resource, fields: fields })));
};
exports.default = DataShow;

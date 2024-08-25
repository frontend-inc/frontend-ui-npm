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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var SortableReferenceCollectionList = function (props) {
    var query = props.query, _a = props.slots, slots = _a === void 0 ? { item: {} } : _a;
    var url = props.url, resource = props.resource;
    url = "".concat(url, "/").concat(resource === null || resource === void 0 ? void 0 : resource.id, "/references");
    return (react_1.default.createElement(__1.CollectionList, __assign({}, props, { url: url, resource: resource, style: "list", list: __1.SortableReferenceListItems, component: __1.CollectionListItem, query: __assign(__assign({}, query), { sort_by: 'position', sort_direction: 'asc' }), slots: __assign(__assign({}, slots), { item: __assign(__assign({}, slots.item), { sortable: true }) }) })));
};
exports.default = SortableReferenceCollectionList;

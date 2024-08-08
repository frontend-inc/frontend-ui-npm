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
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var lucide_react_1 = require("lucide-react");
var JsonForm_1 = __importDefault(require("./json/JsonForm"));
var JsonItem_1 = __importDefault(require("./json/JsonItem"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var JsonArrayInput = function (props) {
    var title = props.title, name = props.name, label = props.label, _a = props.fields, fields = _a === void 0 ? [] : _a, _b = props.value, items = _b === void 0 ? [] : _b, handleChange = props.handleChange, info = props.info;
    var _c = (0, hooks_1.useMenu)(), open = _c.open, anchorEl = _c.anchorEl, openMenu = _c.openMenu, closeMenu = _c.closeMenu;
    var _d = (0, react_1.useState)({}), activeItem = _d[0], setActiveItem = _d[1];
    var _e = (0, react_1.useState)(0), currentIndex = _e[0], setCurrentIndex = _e[1];
    var _f = (0, react_1.useState)('title'), titleField = _f[0], setTitleField = _f[1];
    var buildEmptyItem = function (fields) {
        var emptyItem = {};
        fields.forEach(function (field) {
            emptyItem[field.name] = field.default;
        });
        return emptyItem || {};
    };
    var handleEditClick = function (ev, value, index) {
        openMenu(ev);
        setActiveItem(value);
        setCurrentIndex(index);
    };
    var handleAddClick = function (ev) {
        setActiveItem(buildEmptyItem(fields));
        setCurrentIndex(-1);
        openMenu(ev);
    };
    var handleSubmit = function () {
        var newItems = __spreadArray([], items, true);
        var index = currentIndex;
        if (index == -1) {
            newItems = __spreadArray(__spreadArray([], items, true), [activeItem], false);
        }
        else {
            newItems[index] = activeItem;
        }
        closeMenu();
        handleChange({
            target: {
                name: name,
                value: newItems,
            },
        });
    };
    var handleRemove = function (index) {
        var newValues = __spreadArray([], items, true);
        newValues = newValues.filter(function (_, i) { return i !== index; });
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    var handleInputChange = function (ev) {
        var _a;
        var _b = ev.target, name = _b.name, value = _b.value;
        setActiveItem(__assign(__assign({}, activeItem), (_a = {}, _a[name] = value, _a)));
    };
    var handleDrop = function (sorted) {
        handleChange({
            target: {
                name: name,
                value: sorted,
            },
        });
    };
    (0, react_1.useEffect)(function () {
        var _a;
        if ((fields === null || fields === void 0 ? void 0 : fields.length) > 0) {
            setTitleField(((_a = fields === null || fields === void 0 ? void 0 : fields.find(function (f) { return f.titleField; })) === null || _a === void 0 ? void 0 : _a.name) || 'title');
        }
    }, [fields]);
    return (react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5, sx: sx.root },
        react_1.default.createElement(components_1.InputLabel, { label: label, info: info }),
        react_1.default.createElement(components_1.SortableList, { droppableId: "json-array-".concat(name), handleDrop: handleDrop, items: items, renderItem: function (item, index) { return (react_1.default.createElement(JsonItem_1.default, { key: index, index: index, item: item, titleField: titleField, handleClick: handleEditClick, handleRemove: handleRemove })); } }),
        react_1.default.createElement(material_1.Box, null,
            react_1.default.createElement(material_1.Button, { color: "secondary", variant: "contained", onClick: handleAddClick, startIcon: react_1.default.createElement(lucide_react_1.Plus, { size: 24 }) }, "Add")),
        react_1.default.createElement(components_1.Drawer, { title: title, open: open, handleClose: closeMenu, buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit }, "Save") },
            react_1.default.createElement(JsonForm_1.default, { index: currentIndex, item: activeItem, fields: fields, handleChange: handleInputChange, direction: "column" }))));
};
exports.default = JsonArrayInput;
var sx = {
    root: {
        alignItems: 'flex-start',
    },
    value: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    ValuesInputs: {
        display: 'flex',
        flexDirection: 'column',
    },
    list: {
        width: '100%',
    },
};

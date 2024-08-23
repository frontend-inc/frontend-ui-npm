"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var __1 = require("../..");
var SortableResourceList = function (props) {
    var resources = props.resources, page = props.page, numPages = props.numPages, enableBorder = props.enableBorder, enableEdit = props.enableEdit, enableDelete = props.enableDelete, handleClick = props.handleClick, handleEdit = props.handleEdit, handleDelete = props.handleDelete, handleDrop = props.handleDrop, handleLoadMore = props.handleLoadMore, _a = props.component, Component = _a === void 0 ? __1.Resource : _a;
    return (react_1.default.createElement(material_1.Stack, { spacing: 2, sx: sx.fullWidth },
        (resources === null || resources === void 0 ? void 0 : resources.length) > 0 && (react_1.default.createElement(__1.SortableList, { droppableId: "sortable", items: resources, handleDrop: handleDrop, renderItem: function (resource, index) { return (react_1.default.createElement(Component, { key: index, sortable: true, resource: resource, enableBorder: enableBorder, 
                // @ts-ignore
                handleClick: handleClick ? function () { return handleClick(resource); } : undefined, handleEdit: 
                // @ts-ignore
                enableEdit ? function () { return handleEdit(resource); } : undefined, handleDelete: 
                // @ts-ignore
                enableDelete ? function () { return handleDelete(resource); } : undefined })); } })),
        react_1.default.createElement(__1.LoadMore, { page: page, numPages: numPages, loadMore: handleLoadMore })));
};
exports.default = SortableResourceList;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
    },
    layout: {
        width: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    listDense: {
        gap: '8px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: {
            md: '1fr 1fr 1fr',
            xs: '1fr',
        },
        gap: '16px',
    },
    form: {
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    item: {
        p: 2,
    },
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
    filtersContainer: {
        mr: {
            sm: 2,
            xs: 0,
        },
        mb: {
            sm: 0,
            xs: 2,
        },
    },
    loading: {
        opacity: 0.5,
    },
    circularProgress: {
        color: 'primary.main',
    },
};

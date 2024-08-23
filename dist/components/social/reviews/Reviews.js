"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var ReviewsList_1 = __importDefault(require("./ReviewsList"));
var Reviews = function (props) {
    var url = props.url, handle = props.handle;
    return (react_1.default.createElement(components_2.DataList, { url: "".concat(url, "/").concat(handle, "/reviews"), name: "review", enableSearch: true, enableSorting: true, enableFilters: true, fields: [], sortOptions: [{
                label: 'Date',
                name: 'created_at',
            },
            {
                label: 'Rating',
                name: 'rating',
            }], filterOptions: [{
                label: 'Rating',
                field: 'rating',
                variant: 'ratings_scale',
            }], enableCreate: true, enableEdit: true, enableDelete: true, list: ReviewsList_1.default, edit: components_1.ReviewForm, create: components_1.ReviewForm, slots: {
            toolbar: {
                buttonText: 'Add Review',
            }
        } }));
};
exports.default = Reviews;
var sx = {
    root: {
        py: 2,
        pb: 1.5,
        borderColor: 'divider',
    },
    reviewHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

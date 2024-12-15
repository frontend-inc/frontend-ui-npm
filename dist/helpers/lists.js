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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilterFields = exports.buildSortFields = exports.buildListFields = exports.buildSearchQuery = void 0;
var buildSearchQuery = function (contentType, query) {
    if (query === void 0) { query = {}; }
    var searchQuery = query;
    if ((contentType === null || contentType === void 0 ? void 0 : contentType.length) > 0) {
        searchQuery = __assign(__assign({}, searchQuery), { filters: __spreadArray(__spreadArray([], (searchQuery.filters || []), true), [
                { content_type: { eq: contentType } },
            ], false) });
    }
    return searchQuery;
};
exports.buildSearchQuery = buildSearchQuery;
var buildListFields = function (params) {
    var _a = params || {}, displaySubtitle = _a.displaySubtitle, displayCategory = _a.displayCategory, displayDescription = _a.displayDescription, displayLocation = _a.displayLocation, displayTags = _a.displayTags;
    var displayFields = [];
    var categoryField = {
        label: 'Category',
        variant: 'string',
        name: 'category',
        position: 1,
    };
    var subtitleField = {
        label: 'Subtitle',
        variant: 'string',
        name: 'subtitle',
        position: 2,
    };
    var locationField = {
        label: 'Location',
        variant: 'string',
        name: 'location',
        position: 3,
    };
    var tagsField = {
        label: 'Tags',
        variant: 'array',
        name: 'tags',
        position: 4,
    };
    var descriptionField = {
        label: 'Description',
        variant: 'text',
        name: 'description',
        position: 5,
    };
    if (displaySubtitle)
        displayFields.push(subtitleField);
    if (displayCategory)
        displayFields.push(categoryField);
    if (displayDescription)
        displayFields.push(descriptionField);
    if (displayLocation)
        displayFields.push(locationField);
    if (displayTags)
        displayFields.push(tagsField);
    return displayFields;
};
exports.buildListFields = buildListFields;
var buildSortFields = function (params) {
    var _a = params || {}, sortPosition = _a.sortPosition, sortTitle = _a.sortTitle, sortName = _a.sortName, sortDate = _a.sortDate, sortPublished = _a.sortPublished, sortPrice = _a.sortPrice;
    var positionField = {
        label: 'Default',
        name: 'position',
        position: 1,
    };
    var titleField = {
        label: 'Title',
        name: 'title',
        position: 2,
    };
    var nameField = {
        label: 'Name',
        name: 'name',
        position: 3,
    };
    var dateField = {
        label: 'Date',
        name: 'created_at',
        position: 4,
    };
    var publishedField = {
        label: 'Published',
        name: 'published_at',
        position: 4,
    };
    var priceField = {
        label: 'Price',
        name: 'price',
        position: 5,
    };
    var sortFields = [];
    if (sortPosition)
        sortFields.push(positionField);
    if (sortTitle)
        sortFields.push(titleField);
    if (sortName)
        sortFields.push(nameField);
    if (sortDate)
        sortFields.push(dateField);
    if (sortPublished)
        sortFields.push(publishedField);
    if (sortPrice)
        sortFields.push(priceField);
    return sortFields;
};
exports.buildSortFields = buildSortFields;
var buildFilterFields = function (params) {
    var filterChoices = (params || {}).filterChoices;
    var categoryFilter = {
        label: 'Filter',
        name: 'category',
        variant: 'multiple_choice',
        options: filterChoices === null || filterChoices === void 0 ? void 0 : filterChoices.map(function (option) { return ({
            label: option,
            value: option,
        }); }),
    };
    return [categoryFilter];
};
exports.buildFilterFields = buildFilterFields;

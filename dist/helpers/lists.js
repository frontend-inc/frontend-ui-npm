"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilterFields = exports.buildSortFields = exports.buildListFields = void 0;
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

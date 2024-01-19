"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFromVideoUrl = exports.resize = exports.groupBy = exports.getInitials = exports.truncate = exports.buildOptions = exports.isEmptyObject = void 0;
var isEmptyObject = function (object) {
    if (Object.values(object).every(function (x) { return x === null || x === ''; })) {
        return false;
    }
    else {
        return true;
    }
};
exports.isEmptyObject = isEmptyObject;
var buildOptions = function (items, key, value) {
    if (!items)
        return null;
    var list = (items === null || items === void 0 ? void 0 : items.data) || items;
    return list.map(function (item) { return ({
        value: item[key],
        label: item[value],
    }); });
};
exports.buildOptions = buildOptions;
var truncate = function (str, length) {
    if (length === void 0) { length = 60; }
    if (!str)
        return '';
    if (str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str;
};
exports.truncate = truncate;
var getInitials = function (name) {
    if (!name)
        return '';
    var initials = name
        .split(' ')
        .splice(0, 2)
        .map(function (word) { return word[0]; })
        .join('');
    return initials;
};
exports.getInitials = getInitials;
var groupBy = function (arr, name) {
    var grouped = {};
    arr.forEach(function (item) {
        if (!item || !item[name])
            return;
        var groupBy = item[name];
        if (!grouped[groupBy]) {
            grouped[groupBy] = [];
        }
        grouped[groupBy].push(item);
    });
    return grouped;
};
exports.groupBy = groupBy;
// https://cloudinary.com/documentation/resizing_and_cropping
var resize = function (src, _a) {
    var width = _a.width, height = _a.height, _b = _a.transform, transform = _b === void 0 ? 'fill' : _b;
    if (!src)
        return null;
    var index = src.indexOf('/upload') + 7; // 7 is number of chars in '/upload'
    var params = ["/c_".concat(transform)];
    if (width && width > 0)
        params.push("w_".concat(width));
    if (height && height > 0)
        params.push("h_".concat(height));
    var transformedUrl = src.substring(0, index) + params.join(',') + src.substring(index);
    return transformedUrl;
};
exports.resize = resize;
var imageFromVideoUrl = function (url) {
    return url === null || url === void 0 ? void 0 : url.replace(/mp4|mpeg|ogg|mkv|mov/i, 'jpg');
};
exports.imageFromVideoUrl = imageFromVideoUrl;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = exports.scrollTo = exports.cloudinaryImageFromVideoUrl = exports.cloudinaryConvertToJpeg = exports.resizeCloudinaryImage = exports.groupResourcesByField = exports.groupBy = exports.getInitials = exports.truncate = exports.buildOptions = exports.isEmptyObject = void 0;
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
function getInitials(name) {
    if (!name)
        return '';
    // Trim any extra spaces and split the name into parts based on spaces
    var parts = name.toUpperCase().trim().split(/\s+/);
    // Check if we have at least two parts (multiple words)
    if (parts.length >= 2) {
        // Use the first letter of the first two parts
        return parts[0][0] + parts[1][0];
    }
    else {
        // Use the first two letters of the single part, if it's at least 2 characters long
        return parts[0].length > 1
            ? parts[0].substring(0, 2)
            : parts[0][0] + parts[0][0];
    }
}
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
var groupResourcesByField = function (resources, fieldName, allowedValues) {
    // Initialize the grouped result object with keys from allowedValues
    var grouped = {};
    allowedValues.forEach(function (value) {
        grouped[value] = [];
    });
    // Iterate over each resource
    resources.forEach(function (resource) {
        // Check if the resource has the specified field and if its value is allowed
        if (resource.hasOwnProperty(fieldName) &&
            allowedValues.includes(resource[fieldName])) {
            // Add the resource to the appropriate group
            grouped[resource[fieldName]].push(resource);
        }
    });
    return grouped;
};
exports.groupResourcesByField = groupResourcesByField;
// https://cloudinary.com/documentation/resizing_and_cropping
var resizeCloudinaryImage = function (src, _a // fit | fill | crop | scale | pad | lfill | limit
) {
    var width = _a.width, height = _a.height, _b = _a.transform, transform = _b === void 0 ? 'fill' : _b;
    if (!src)
        return null;
    var index = src.indexOf('/upload') + 7; // 7 is number of chars in '/upload'
    var params = ["/c_".concat(transform, ",q_auto")];
    if (width && width > 0)
        params.push("w_".concat(width));
    if (height && height > 0)
        params.push("h_".concat(height));
    var transformedUrl = src.substring(0, index) + params.join(',') + src.substring(index);
    return transformedUrl;
};
exports.resizeCloudinaryImage = resizeCloudinaryImage;
var cloudinaryConvertToJpeg = function (url) {
    return url.replace(/\.\w+$/, '.jpg');
};
exports.cloudinaryConvertToJpeg = cloudinaryConvertToJpeg;
var cloudinaryImageFromVideoUrl = function (url) {
    if (!url)
        return null;
    return url === null || url === void 0 ? void 0 : url.replace(/mp4|mpeg|ogg|mkv|mov/i, 'jpg');
};
exports.cloudinaryImageFromVideoUrl = cloudinaryImageFromVideoUrl;
var scrollTo = function (domId) {
    var elem = document.getElementById(domId);
    elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({ behavior: 'smooth' });
};
exports.scrollTo = scrollTo;
var formatCurrency = function (amount, currency) {
    if (currency === void 0) { currency = 'USD'; }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(amount);
};
exports.formatCurrency = formatCurrency;

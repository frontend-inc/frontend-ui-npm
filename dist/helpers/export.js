"use strict";
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
exports.exportJsonToCSV = void 0;
var lodash_1 = require("lodash");
var moment_1 = __importDefault(require("moment"));
function exportJsonToCSV(headers, items) {
    // Extract rows (values for each object)
    var rows = items.map(function (obj) {
        return headers.map(function (header) {
            var value = (0, lodash_1.get)(obj, header);
            // Format date values
            if ((0, moment_1.default)(value, moment_1.default.ISO_8601, true).isValid()) {
                return (0, moment_1.default)(value).format('MM/DD/YYYY');
            }
            if (value === null || value === undefined || typeof value === 'object') {
                return '';
            }
            return value; // Ensure the value is returned
        });
    });
    // Create CSV content
    var csvContent = __spreadArray([
        headers.join(',')
    ], rows.map(function (row) { return row.join(','); }), true).join('\n');
    // Get the current date for the file name
    var date = (0, moment_1.default)().format('MM-DD-YYYY');
    // Create a Blob object and trigger the download
    var blob = new Blob([csvContent], { type: 'text/csvcharset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', "export-".concat(date, ".csv")); // Add formatted date to the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
exports.exportJsonToCSV = exportJsonToCSV;

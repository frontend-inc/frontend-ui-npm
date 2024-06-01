"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterLinkVisibility = void 0;
var filterLinkVisibility = function (link, currentUser) {
    var visible = true;
    if (link.visibility == 'user' && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        visible = false;
    }
    if (link.visibility == 'guest' && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id)) {
        visible = false;
    }
    if (link.visibility == 'admin' && !(currentUser === null || currentUser === void 0 ? void 0 : currentUser.admin)) {
        visible = false;
    }
    return visible;
};
exports.filterLinkVisibility = filterLinkVisibility;

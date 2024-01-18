"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var useNavigation = function (props) {
    var url = props.url;
    var router = (0, router_1.useRouter)();
    var handleShowClick = function (resource) { return router.push("".concat(url, "/").concat(resource.id)); };
    var handleEditClick = function (resource) {
        return router.push("".concat(url, "/").concat(resource.id, "/edit"));
    };
    var handleAddClick = function () { return router.push("".concat(url, "/new")); };
    return {
        handleClick: handleShowClick,
        handleShowClick: handleShowClick,
        handleEditClick: handleEditClick,
        handleAddClick: handleAddClick,
        toShow: handleShowClick,
        toEdit: handleEditClick,
        toAdd: handleAddClick,
    };
};
exports.default = useNavigation;

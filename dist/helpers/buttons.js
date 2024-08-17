"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActions = void 0;
var buildActions = function (_a) {
    var enableEdit = _a.enableEdit, enableDelete = _a.enableDelete, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete, buttons = _a.buttons;
    var EDIT_ACTION = {
        label: 'Edit',
        color: 'secondary',
        button_type: 'click',
        onClick: handleEdit,
    };
    var DELETE_ACTION = {
        label: 'Delete',
        color: 'error',
        button_type: 'click',
        onClick: handleDelete,
    };
    var newActions = [];
    if (buttons) {
        newActions = newActions.concat(buttons);
    }
    if (enableEdit && handleEdit) {
        //@ts-ignore
        newActions.push(EDIT_ACTION);
    }
    if (enableDelete && handleDelete) {
        //@ts-ignore
        newActions.push(DELETE_ACTION);
    }
    return newActions;
};
exports.buildActions = buildActions;

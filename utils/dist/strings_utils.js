"use strict";
exports.__esModule = true;
exports.isEmpty = void 0;
function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}
exports.isEmpty = isEmpty;

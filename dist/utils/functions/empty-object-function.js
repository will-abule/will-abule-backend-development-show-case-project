"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
function isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=empty-object-function.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const error_middleware_1 = require("./../middleware/error-middleware");
const post_route_1 = require("../routes/rest/post-route");
const routes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.use("/api/post", post_route_1.postRoute);
    app.use(error_middleware_1.middlewareErrorHandler);
});
exports.routes = routes;
//# sourceMappingURL=routes.js.map
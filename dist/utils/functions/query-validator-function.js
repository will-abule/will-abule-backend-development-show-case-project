"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicResponse = exports.validateQuery = void 0;
const joi_1 = __importDefault(require("joi"));
const graphql_1 = require("graphql");
const { GraphQLScalarType, Kind } = require("graphql");
const Any = new GraphQLScalarType({
    name: "Any",
    description: "Any value.",
    parseValue: (value) => value,
    parseLiteral,
    serialize: (value) => value,
});
function parseLiteral(ast) {
    switch (ast.kind) {
        case Kind.BOOLEAN:
        case Kind.STRING:
            return ast.value;
        case Kind.INT:
        case Kind.FLOAT:
            return Number(ast.value);
        case Kind.LIST:
            return ast.values.map(parseLiteral);
        case Kind.OBJECT:
            return ast.fields.reduce((accumulator, field) => {
                accumulator[field.name.value] = parseLiteral(field.value);
                return accumulator;
            }, {});
        case Kind.NULL:
            return null;
        default:
            throw new Error(`Unexpected kind in parseLiteral: ${ast.kind}`);
    }
}
const validateQuery = (requestQuery) => {
    const schema = joi_1.default.object({
        filter: joi_1.default.boolean().required(),
        sort: joi_1.default.string().required(),
        sortName: joi_1.default.string().required(),
        pageSize: joi_1.default.number().required(),
        pageNumber: joi_1.default.number().required(),
        searchFilters: joi_1.default.string().required(),
    });
    const { error } = schema.validate(requestQuery);
    return error ? error : null;
};
exports.validateQuery = validateQuery;
exports.dynamicResponse = {
    status: { type: graphql_1.GraphQLInt },
    message: { type: graphql_1.GraphQLString },
    error: { type: Any },
    data: { type: Any },
};
//# sourceMappingURL=query-validator-function.js.map
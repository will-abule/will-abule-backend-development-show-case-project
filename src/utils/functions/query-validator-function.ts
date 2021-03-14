import Joi from "joi";
import { GraphQLInt, GraphQLString } from "graphql";
import { AnyNaptrRecord } from "node:dns";
const { GraphQLScalarType, Kind } = require("graphql");
const Any = new GraphQLScalarType({
  name: "Any",
  description: "Any value.",
  parseValue: (value: any) => value,
  parseLiteral,
  serialize: (value: AnyNaptrRecord) => value,
});

function parseLiteral(ast: any) {
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
      return ast.fields.reduce((accumulator: any, field: any) => {
        accumulator[field.name.value] = parseLiteral(field.value);
        return accumulator;
      }, {});
    case Kind.NULL:
      return null;
    default:
      throw new Error(`Unexpected kind in parseLiteral: ${ast.kind}`);
  }
}

export const validateQuery = (requestQuery: any) => {
  const schema = Joi.object({
    filter: Joi.boolean().required(),
    sort: Joi.string().required(),
    sortName: Joi.string().required(),
    pageSize: Joi.number().required(),
    pageNumber: Joi.number().required(),
    searchFilters: Joi.string().required(),
  });

  const { error } = schema.validate(requestQuery);

  return error ? error : null;
};

export const dynamicResponse = {
  status: { type: GraphQLInt },
  message: { type: GraphQLString },
  error: { type: Any },
  data: { type: Any },
};

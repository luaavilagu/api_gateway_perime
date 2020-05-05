"use strict";

var _schema = _interopRequireDefault(require("../schema/schema"));

var _resolvers = _interopRequireDefault(require("../resolvers/resolvers"));

var _enviroments = require("../enviroments/enviroments");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require("apollo-server"),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var server = new ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  context: _enviroments.context
});
server.listen({
  port: 3000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("SERVER APIGATEWAY PERIME at: ".concat(url));
});
//# sourceMappingURL=index.js.map
"use strict";

var _resolvers = _interopRequireDefault(require("../resolvers/resolvers"));

var _schema = _interopRequireDefault(require("../schema/schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require("apollo-server"),
    ApolloServer = _require.ApolloServer;

var server = new ApolloServer({
  schema: _schema["default"],
  resolver: _resolvers["default"]
});
console.log(_resolvers["default"]);
console.log(_schema["default"]);
server.listen({
  port: 3000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("SERVER APIGATEWAY PERIME at: ".concat(url));
});
//# sourceMappingURL=index.js.map
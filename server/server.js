const express = require("express");

// imported Appollo Server and Middleware
const { ApolloServer } = require("@apollo/server");
const { authMiddleware } = require("./utils/auth");
const { expressMiddleware } = require("@apollo/server/express4");

const path = require("path");
const db = require("./config/connection");

const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();
const PORT = process.env.PORT || 3001;

//function to start Apollo Server
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.use("/graphql", expressMiddleware(server));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

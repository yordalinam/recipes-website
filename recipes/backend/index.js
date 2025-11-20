import express from "express";
//import cors from "cors";
import mongoose from "mongoose";
import recipeRoute from "./routes/recipe.route.js";
import swaggerUi from "swagger-ui-express";
import { loadSwaggerSpec } from "./swagger/loadSwagger.js";

const app = express();
//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic route for root path
app.get("/", (req, res) => {
  res.send("Hello from Node API Server😻");
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://linavladimirova12_db_user:WVijHmKsRcc4RQjN@backendrecipes.dpj8xrm.mongodb.net/Node-API?appName=BackendRecipes"
  )
  .then(() => {
    console.log("Connected to the database!");
    startServer();
  })
  .catch(() => {
    console.log("connection failed");
  });

// Use your routes
app.use("/api/recipes", recipeRoute);

async function startServer() {
  const swaggerDocument = await loadSwaggerSpec();

  // Serve raw Swagger JSON for tools like openapi-typescript
  app.get("/api-docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });

  // Serve Swagger UI and tell it to use the above JSON URL
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerUrl: "/api-docs/swagger.json",
    })
  );

  app.listen(3000, () => console.log("Server is running on port 3000🥕"));
}

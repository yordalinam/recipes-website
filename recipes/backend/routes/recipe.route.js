import express from "express";
const router = express.Router();
import {
  getRecipes,
  getRecipesId,
  addRecipe,
  changeRecipe,
  deleteRecipe,
} from "../controllers/recipe.controller.js";

router.get("/", getRecipes);

router.get("/:id", getRecipesId);

router.post("/", addRecipe);

router.put("/:id", changeRecipe);

router.delete("/:id", deleteRecipe);

export default router;

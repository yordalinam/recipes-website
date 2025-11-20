import Recipe from "../models/recipe.model.js";

export const getRecipes = async (req, res) => {
  try {
    console.log("before destructuring: Req query", req.query);
    const { allergens, includeIngredients, excludeIngredients, tags } =
      req.query;
    console.log("Req query", req.query);

    let query = {};

    if (allergens) {
      console.log("Req query", req.query);
      const allergenList = allergens.split(",");
      query.$nor = [{ allergens: { $in: allergenList } }];
    }

    if (includeIngredients) {
      query.ingredients = { $all: includeIngredients.split(",") };
    }

    if (excludeIngredients) {
      query.ingredients = {
        ...(query.ingredients || {}),
        $nin: excludeIngredients.split(","),
      };
    }

    if (tags) {
      query.tags = { $in: tags.split(",") };
    }

    const recipes = await Recipe.find(query);

    console.log("Query received:", req.query);
    console.log("Mongo query used:", query);
    console.log("Recipes found:", recipes.length);

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error in getRecipes:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getRecipesId = async (req, res) => {
  //get a specific recipe through its id using params
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addRecipe = async (req, res) => {
  //add a new recipe
  try {
    const recipe = await Recipe.create(req.body); //creating an object for that model
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const changeRecipe = async (req, res) => {
  //change recipe
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body); //whatever the user puts in the req.body, that is what we want to update it with
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
    }
    const updatedRecipe = await Recipe.findById(id);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  //delete a recipe
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

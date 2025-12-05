//we need a model - we use it to store data on out database
import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter recipe name"],
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
    },
    method: {
      type: String,
      required: [true, "Method of cooking is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      default: [],
    },
    cookingTime: {
      type: Number,
      min: 0,
    },
    servings: {
      type: Number,
      min: 0,
    },
    allergens: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

//we need to now allow mongodb to use this:
//call this as the model:
const Recipe = mongoose.model("Recipe", RecipeSchema); //we create the model: on the database it will be called recipes

export default Recipe;

//we are now going to use this model to save data into our database -> use it in index.js

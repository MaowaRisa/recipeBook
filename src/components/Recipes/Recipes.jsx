import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const recipes = useLoaderData();
    
    return (
        <div className="text-center">
            <h2>Recipes: {recipes['meals'].length}</h2>
            <div className="grid grid-cols-4 gap-4 p-10">
                {
                    recipes['meals'].map(recipe => <Recipe key={recipe.idMeal} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;
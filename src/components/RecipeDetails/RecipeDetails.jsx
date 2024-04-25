import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const {idMeal, strMeal, strCategory, strMealThumb, strArea, strInstructions} = recipe.meals[0];
    console.log(recipe.meals[0]);
    return (
        <div className="text-center my-4">
            <h1 className="text-2xl font-semibold text-blue-950"><span>{strCategory}: </span>The recipe details of {strMeal}</h1>
            <div className="flex gap-2 justify-center items-center p-4">
                <img className="" src={strMealThumb} alt={strMeal}/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-left text-lg font-semibold">Ingredients:</h3>
                    <div className="grid grid-cols-2">
                        {/* Map over ingredients and measures */}
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(index => {
                        const ingredient = recipe.meals[0][`strIngredient${index}`];
                        const measure = recipe.meals[0][`strMeasure${index}`];
                        // Render ingredient and measure if both are present
                        if (ingredient && measure) {
                            return (
                            <p className="text-left" key={index}>
                                {measure} - {ingredient}
                            </p>
                            );
                        }
                        return null; // Render nothing if either ingredient or measure is missing
                        })}
                    </div>
                    <p className="text-justify">{strInstructions}</p>
                    <p>This recipe is from {strArea} culture</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
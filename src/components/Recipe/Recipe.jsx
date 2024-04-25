import { Link } from "react-router-dom";

const Recipe = ({recipe}) => {
    const {idMeal, strMeal, strCategory, strMealThumb, strArea} = recipe;
    return (
        <div className="flex flex-col gap-1">
            <img className="rounded-lg" src={strMealThumb} alt={strMeal} />
            <p className="text-lg ">{strMeal}</p>
            <Link to={`/recipe/${idMeal}`} className="bg-amber-600 py-2 rounded-lg font-semibold text-white">
                Get recipes
            </Link>
            <div className="flex flex-row justify-between">
                <p>Category: {strCategory}</p>  
                <p>~ {strArea}</p>
            </div>
        </div>
    );
};

export default Recipe;
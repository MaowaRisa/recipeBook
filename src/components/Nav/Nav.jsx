import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <h1 className="text-lg text-center bg-gray-200 p-5">Recipe Book</h1>
            <nav className="text-center py-3 bg-slate-500 text-white font-semibold space-x-10">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/recipes'>Recipes</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Nav;
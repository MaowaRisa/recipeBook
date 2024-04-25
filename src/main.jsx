import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Recipes from './components/Recipes/Recipes'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import Index from './components/Index/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true, 
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
        element: <Index/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/recipes',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Recipes/>
      },
      {
        path: '/recipe/:idMeal',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <RecipeDetails/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

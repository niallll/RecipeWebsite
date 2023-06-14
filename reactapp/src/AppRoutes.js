import About from "./components/About";
import Login from "./components/Login";
import { Counter } from "./components/Counter";
import HowTo from "./components/HowTo";
import Recipe from "./components/Recipe";
import Recipies from "./components/Recipies";
import RecipeEdit from "./components/RecipeEdit";
import RecipeNew from "./components/RecipeNew";

const AppRoutes = [
  {
    index: true,
    element: <Recipies />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-recipes',
    element: <Recipies />
  },
  {
    path: '/recipe/:id',
    element: <Recipe />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/how-to',
    element: <HowTo />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/recipe-edit/:id',
    element: <RecipeEdit />
  },
  {
    path: '/recipe-new',
    element: <RecipeNew />
  }


];

export default AppRoutes;

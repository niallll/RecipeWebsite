import About from "./components/About";
import Login from "./components/Login";
import HowTo from "./components/HowTo";
import Recipe from "./components/Recipe";
import Recipies from "./components/Recipies";
import RecipeEdit from "./components/RecipeEdit";
import Home from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/fetch-recipes",
    element: <Recipies />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/how-to",
    element: <HowTo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recipe-edit/:id",
    element: <RecipeEdit />,
  },
];

export default AppRoutes;

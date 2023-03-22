import About from "./components/About";
import Login from "./components/Login";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import HowTo from "./components/HowTo";
import RankItems from "./components/RankItems";
import Recipe from "./components/Recipe";
import Recipies from "./components/Recipies";

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
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/rank-items',
    element: <RankItems />
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
  }


];

export default AppRoutes;

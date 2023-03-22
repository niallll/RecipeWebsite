import About from "./components/About";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItems from "./components/RankItems";
import Recipe from "./components/Recipe";
import Recipies from "./components/Recipies";

const AppRoutes = [
  {
    index: true,
    element: <Home />
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
    path: '/recipe',
    element: <Recipe/>
},
{
  path: '/about',
  element: <About/>
}


];

export default AppRoutes;

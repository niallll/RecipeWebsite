import React from "react";
import { RecipeFilterProvider } from "../contexts/RecipeFilterContext";
import HomeTop from "./HomeTop";
import HomeMid from "./HomeMid";

const Home = () => {
  return (
    <RecipeFilterProvider>
      <HomeTop />
      <HomeMid />
    </RecipeFilterProvider>
  );
};
export default Home;

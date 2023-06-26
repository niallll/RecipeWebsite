import { useState, useEffect } from "react";
import axios from "axios";

function useFilters() {
  const [maxCals, setMaxCals] = useState(2000);

  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    axios
      .get(`https://localhost:3000/api/recipe`)
      .then((results) => {
        return results.data;
      })
      .then((data) => {
        setRecipes(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function HandleCalorieFilterChange(event) {
    const { value } = event.target;
    setMaxCals(value);
  }

  return {
    maxCals,
    HandleCalorieFilterChange,
    recipes,
  };
}

export default useFilters;

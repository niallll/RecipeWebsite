import { useState, useEffect } from "react";

function useFilters() {
  const [maxCals, setMaxCals] = useState(2000);

  function HandleCalorieFilterChange(event) {
    const { value } = event.target;
    console.log(value);
    setMaxCals(value);
  }

  return {
    maxCals,
    HandleCalorieFilterChange,
  };
}

export default useFilters;

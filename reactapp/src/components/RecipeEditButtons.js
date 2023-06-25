import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";
import { RecipeContext } from "../contexts/RecipeContext";

const RecipeEditButtons = () => {
  const { recipe, EditClick, ArchiveClick } = useContext(RecipeContext);

  return (
    <>
      <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
        <Button color="warning" className="m-2">
          Cancel
        </Button>
      </Link>
      <Button color="success" className="m-2" onClick={EditClick}>
        Save
      </Button>
      {recipe.id != null && (
        <Button color="danger" className="m-2 float-end" onClick={ArchiveClick}>
          Archive Recipe
        </Button>
      )}
    </>
  );
};
export default RecipeEditButtons;

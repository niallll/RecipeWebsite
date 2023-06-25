const RecipeImage = ({ recipe }) => {
  return recipe.imageName != null ? (
    <img
      src={`https://localhost:3000/images/${recipe.imageName}`}
      alt={recipe.title}
      className="recipe-img-edit"
    />
  ) : (
    <div>{recipe.imageName}No image stored yet.</div>
  );
};

export default RecipeImage;

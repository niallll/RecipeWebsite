import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useRecipe(id) {
  const [newIngredient, setNewIngredient] = useState("");
  const [newInstruction, setNewInstruction] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [recipe, setRecipe] = useState({
    title: "",
    calories: null,
    time: null,
    description: "",
    ingredients: [],
    instructions: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id != 0) {
      axios
        .get(`https://localhost:3000/api/recipe/${id}`)
        .then((results) => {
          return results.data;
        })
        .then((data) => {
          console.log(data);
          setRecipe(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  function SubmitClick() {
    if (id != 0) {
      UpdateRecipe();
    } else {
      CreateRecipe();
    }
  }

  function UpdateRecipe() {
    //update recipe with current values
    axios
      .put(`https://localhost:3000/api/recipe/${id}`, recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //goto the recipe display
    navigate(`/recipe/${recipe.id}`);
  }

  function CreateRecipe() {
    //update recipe with current values
    axios
      .post(`https://localhost:3000/api/recipe`, recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    //Once we return the id of new recipe we can add the selected file.
    //UpdateImage(id);

    navigate(`/recipies`);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (id === 0) {
      file === undefined ? setSelectedFile(null) : setSelectedFile(file);
    } else {
      UpdateImage(id, file);
    }
  };

  function UpdateImage(recipeId, file) {
    console.log(file);
    if (file != null) {
      let formData = new FormData();
      formData.append("photo", file);
      axios
        .put(`https://localhost:3000/api/photo/${recipeId}`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function ArchiveClick() {
    console.log(id);
    axios
      .delete(`https://localhost:3000/api/recipe/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(`/`);
  }

  const handleNewIngredientChange = (event) => {
    const { value } = event.target;
    setNewIngredient(value);
  };

  const handleNewIngredientSubmit = () => {
    var max = 0;
    if (recipe.ingredients.length > 0) {
      max =
        recipe.ingredients.reduce(function (prev, current) {
          return prev.stepNumber > current.stepNumber ? prev : current;
        }).stepNumber + 1;
    }

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        { id: -1, name: newIngredient, stepNumber: max },
      ],
    }));
    setNewIngredient("");
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;

    const updatedIngredients = recipe.ingredients;
    const IngredientIndex = updatedIngredients.findIndex(
      (i) => i.stepNumber === index
    );
    console.log(IngredientIndex);
    updatedIngredients[IngredientIndex].name = value;

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: updatedIngredients,
    }));
  };

  const handleNewInstructionChange = (event) => {
    const { value } = event.target;
    setNewInstruction(value);
  };

  const handleNewInstructionSubmit = () => {
    var max = 0;
    if (recipe.instructions.length > 0) {
      max =
        recipe.instructions.reduce(function (prev, current) {
          return prev.stepNumber > current.stepNumber ? prev : current;
        }).stepNumber + 1;
    }

    setRecipe((prevState) => ({
      ...prevState,
      instructions: [
        ...prevState.instructions,
        { id: -1, instructionText: newInstruction, stepNumber: max },
      ],
    }));
    setNewInstruction("");
  };

  const handleInstructionChange = (event, index) => {
    const { value } = event.target;

    const updatedInstructions = recipe.instructions;
    const InstructionIndex = updatedInstructions.findIndex(
      (i) => i.stepNumber === index
    );
    updatedInstructions[InstructionIndex].instructionText = value;

    setRecipe((prevState) => ({
      ...prevState,
      instructions: updatedInstructions,
    }));
  };

  const handleRecipeChange = (event) => {
    const { name, value } = event.target;

    setRecipe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    recipe,
    newIngredient,
    newInstruction,
    EditClick: SubmitClick,
    ArchiveClick,
    handleFileChange,
    handleNewIngredientChange,
    handleIngredientChange,
    handleNewIngredientSubmit,
    handleNewInstructionChange,
    handleNewInstructionSubmit,
    handleInstructionChange,
    handleRecipeChange,
  };
}

export default useRecipe;

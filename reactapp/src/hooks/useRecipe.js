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

  function EditClick() {
    console.log(selectedFile);

    axios
      .put(`https://localhost:3000/api/recipe/${id}`, recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    let formData = new FormData();
    formData.append("photo", selectedFile);
    axios
      .put(`https://localhost:3000/api/photo/${id}`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate(`/recipe/${recipe.id}`);
  }

  useEffect(() => {
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
  }, [id]);

  const handleFileChange = (event) => {
    event.target.files[0] == undefined
      ? setSelectedFile(null)
      : setSelectedFile(event.target.files[0]);
  };

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
    EditClick,
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
import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { Row } from "reactstrap";
import RecipeNutritionBox from "./RecipeNutritionBox";

const RecipeNutritionBoxes = () => {
  const { recipe } = useContext(RecipeContext);

  return (
    <>
      <Row
        style={{ "border-top-style": "solid", "border-width": "1px" }}
        className="py-2 my-2"
      >
        NUTRITION PER SERVING
      </Row>
      <Row>
        <RecipeNutritionBox
          NutritionType="Calories"
          Amount={recipe.calories}
          DailyAllowance={2000}
          Description="Calories are a unit of energy that the body obtains from food and beverages. They are necessary for various bodily functions and activities. Consuming more calories than the body needs can lead to weight gain, while consuming fewer calories can result in weight loss."
        />

        <RecipeNutritionBox
          NutritionType="Fat"
          Amount={recipe.fat}
          DailyAllowance={200}
          Description="fat is a macronutrient that provides energy and plays crucial roles in the body. It is a concentrated source of calories, containing nine calories per gram. While some types of fats, such as unsaturated fats found in foods like avocados and nuts, are beneficial for overall health, excessive consumption of unhealthy fats, like saturated and trans fats, can increase the risk of certain health conditions"
        />
        <RecipeNutritionBox
          NutritionType="Saturated"
          Amount={recipe.saturates}
          DailyAllowance={2000}
          Description="Saturated fat is a type of fat found primarily in animal-based products, as well as some plant-based oils like coconut and palm oil. It is known to raise levels of LDL cholesterol, often referred to as 'bad' cholesterol, in the blood, which can contribute to an increased risk of heart disease and stroke when consumed in excess. To promote heart health, it is recommended to limit the intake of saturated fat and choose healthier alternatives like unsaturated fats found in foods like olive oil, nuts, and seeds."
        />
        <RecipeNutritionBox
          NutritionType="Sugars"
          Amount={recipe.sugars}
          DailyAllowance={2000}
          Description="Sugar refers to the naturally occurring sugars found in foods like fruits and dairy products, as well as added sugars that are incorporated into processed foods and beverages. While sugars are a source of energy, excessive consumption of added sugars can contribute to weight gain, dental issues, and an increased risk of chronic diseases such as type 2 diabetes and heart disease. It is important to read food labels and be mindful of added sugars in order to maintain a balanced and healthy diet."
        />
        <RecipeNutritionBox
          NutritionType="Protien"
          Amount={recipe.protein}
          DailyAllowance={2000}
          Description="protein is a macronutrient essential for building and repairing tissues, supporting immune function, and producing enzymes and hormones. It is made up of amino acids, which are the building blocks of protein. Including adequate protein in the diet, from sources like lean meats, poultry, fish, legumes, and dairy products, is important for overall health, muscle development, and satiety."
        />
        <RecipeNutritionBox
          NutritionType="Carbs"
          Amount={recipe.carbs}
          DailyAllowance={2000}
          Description="carbohydrates, are one of the three macronutrients essential for energy production in the body. They are found in various foods such as grains, fruits, vegetables, and legumes. Carbohydrates provide the body with glucose, which is the primary fuel source for the brain and muscles. It's important to choose complex carbohydrates, such as whole grains and fibrous fruits and vegetables, over simple carbohydrates like refined sugars, for sustained energy and overall health."
        />
      </Row>
      <div>OF AN ADULT'S REFERENCE INTAKE</div>
    </>
  );
};

export default RecipeNutritionBoxes;

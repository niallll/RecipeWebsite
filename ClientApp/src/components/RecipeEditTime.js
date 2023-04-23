import React from 'react';

const RecipeEditNumberValue = (prop) => {
  return (
    <div className='recipe-preview-time-wrapper'>
      <div className='recipe-preview-time'>
        <label className='recipe-preview-price'>{prop.text}:</label>
        <input defaultValue={prop.value} className='recipe-preview-price' name={prop.name} onChange={prop.handleInputChange}></input>
      </div>
    </div>
  );
};

export default RecipeEditNumberValue;